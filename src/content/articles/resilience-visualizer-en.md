---
title: "Resilience Visualizer – an interactive microservices failure simulator"
description: "How I built a browser-based tool for visualizing resilience patterns – circuit breakers, thread pool exhaustion, and cascading failures – with no installation required. Built and written with Claude Code."
date: 2026-03-15
tags: ["Side Project", "React", "TypeScript", "Microservices", "Claude Code", "Simulation"]
draft: false
featured: true
coverImage: "/projects/resilience-visualization/demo-1-ok.png"
coverTheme: "dark"
---

## Why I built this

Whenever I explain to colleagues or clients why a system went down, I keep running into the same problem: concepts like *circuit breaker*, *thread pool exhaustion*, or *cascading failure* are hard to convey with words or a static diagram. You can draw arrows and boxes, but that doesn't show **what happens over time** — how one slow service can block an entire system, or how a well-configured circuit breaker cuts off traffic and protects the remaining components.

I wanted a tool that:
- runs in the browser with no installation,
- lets you draw any microservices architecture,
- simulates real-time traffic with configurable parameters,
- clearly shows where bottlenecks, timeouts, and cascading failures form,
- works equally well for personal experiments and live presentations during code reviews, workshops, or client meetings.

That's how **Resilience Visualizer** was born — an interactive resilience patterns simulator for microservices architectures.

<figure>
  <img src="/projects/resilience-visualization/demo-1-ok.png" alt="Resilience Visualizer – system running normally" />
  <figcaption>System running normally — nodes are green, requests flow through the BFF architecture with a load balancer.</figcaption>
</figure>

## Demo

<video controls width="100%" style="border-radius: 8px; margin: 1.5rem 0;">
  <source src="/projects/resilience-visualization/demo.mov" type="video/mp4" />
  Your browser does not support video playback.
</video>

## What it looks like in action

Here's a view when one of the backends starts returning errors — the node turns red, the circuit breaker opens, and traffic to the overloaded service is cut off.

<figure>
  <img src="/projects/resilience-visualization/demo-1-bad.png" alt="Resilience Visualizer – cascading failure in progress" />
  <figcaption>Cascading failure — an overloaded backend exhausts BFF threads, which starts rejecting requests from the client.</figcaption>
</figure>

A retry storm scenario — three clients simultaneously hammering a single API Gateway, causing a thundering herd effect:

<figure>
  <img src="/projects/resilience-visualization/demo-2-storm.png" alt="Resilience Visualizer – retry storm" />
  <figcaption>Retry storm — a sudden traffic spike overwhelms the gateway, threads are exhausted, the system enters an error spiral.</figcaption>
</figure>

And here's a realistic e-commerce microservice mesh with multiple services:

<figure>
  <img src="/projects/resilience-visualization/demo-3-mesh.png" alt="Resilience Visualizer – e-commerce microservice mesh" />
  <figcaption>Microservice mesh — Gateway → User/Product/Inventory Service → separate databases. A realistic production scenario.</figcaption>
</figure>

## Features

### Circuit Breaker

One of the hardest elements to simulate correctly. I implemented **three trigger threshold modes**:

- **Count** — CB opens after N errors within a time window (classic Hystrix behavior)
- **Percentage** — CB opens when the error percentage exceeds a threshold, but only after collecting a minimum sample — without this, one error out of one request = 100% failure rate and an immediately tripped CB
- **Both** — both conditions checked in parallel, either one is sufficient

CB states: `closed` → `open` → `half-open` → `closed` (or back to `open`). In `half-open` state, one probe request is allowed through.

### Platform threads vs Virtual/Async threads

This discovery came from an observation that initially looked like a bug: at 50 rps with 1250ms backend latency, the BFF was showing only 11 active threads instead of ~62.

It turned out the original simulation modeled **asynchronous/virtual threads** — when the BFF sent a request to the Backend, its thread was immediately released. This is correct behavior for Node.js, Spring WebFlux, or Java 21 Virtual Threads, but completely different from Spring MVC, Django, or classic .NET.

I implemented a **Platform / Virtual (Async)** toggle:
- **Platform** — the BFF thread is blocked for the entire duration of the downstream response. At 50 rps × 1.25s = 62.5 concurrent threads — exactly what you'd expect.
- **Virtual/Async** — the thread is released immediately after forwarding the request.

This distinction is fundamental when demonstrating *thread starvation* and *cascading failures* — in the platform model, a slow downstream directly kills the upstream.

### Load Balancer

Three strategies per node: **round-robin**, **random**, **least-connections**. Node health is taken into account — dead nodes are skipped when selecting a target.

### Health Check & Chaos Engineering

Every node has a **Kill / Recover** button:
- Kill marks the node as unavailable — skipped by the load balancer
- Recover restores the node **without resetting its configuration** (error rate, processing time remain)

This is an important detail — you can set a node to 40% errors, kill it, and after recovery it still holds that configuration.

### Metrics — two error rate indicators

I added two separate error rate metrics:

| Metric | Description | Use case |
|:---|:---|:---|
| **Err%(W)** | Errors within the time window | Node coloring, fast reaction |
| **Err%(∑)** | Cumulative errors since start | Long-term trend, shown in table |

A node changes color (green → yellow → red) based on the windowed value — 10–15 seconds after killing a backend you see the color change, not after several minutes like with the cumulative metric.

### Built-in scenarios

Eight preset scenarios for learning and demonstrations:

1. **Mobile App → 2x BFF → F5 → 3x Backend** — classic load-balanced flow with a circuit breaker on the BFF
2. **High Traffic → LB → 8x Backend** — 100 rps across 8 backends; kill a node and watch traffic redistribute
3. **Cascading Failure** — a slow DB blocks the Backend, which blocks the BFF
4. **Circuit Breaker Demo** — client with CB + unstable API (40% errors); open→half-open→closed cycle
5. **Connection Pool Exhaustion** — small pool (5 connections) vs 50 rps + slow backend
6. **Retry Storm** — thundering herd effect with three clients
7. **Microservice Mesh** — realistic e-commerce with multiple services and databases
8. **Timeout Tuning** — chain of 4 services with different timeouts

## Interesting technical challenges

### Non-blocking simulation engine

`requestAnimationFrame` is single-threaded. With high request volumes (100 rps × 10×) every `tick()` had to be fast. Edge animations are **purely visual** and don't block simulation logic. Requests older than 2000ms of sim-time are garbage collected.

### Two time domains: sim-time and wall-clock

At 10× speed, a single `requestAnimationFrame` covers 10× more simulation time. All sim-time-based counters scale automatically. But RPS had to be measured in wall-clock time — otherwise at 10× it would show 1000 rps instead of the actual 100.

### errorRate drifting to zero

Originally, the error counter was derived from the active request array (growing denominator, fixed numerator), causing `errorRate` to trend toward zero after a few minutes regardless of reality. Fix: **historical, monotonically increasing counters** per node.

### avgLatency dropping under load

When a backend was rejecting requests, `avgLatency` on the BFF *decreased* — because rejected requests have latency ≈ 0ms and were included in the average. Fix: `avgLatency` now tracks only successfully completed requests.

### Node card jitter

Numbers (rps, ms, %) change every frame, and different values have different character widths. Fix: fixed width `w-[210px]` + `flex justify-between` + CSS `tabular-nums`. Nodes don't resize during simulation.

## Tech stack

The project is a fully static SPA, hosted on Vercel — zero backend, zero infrastructure.

| Layer | Technology |
|:---|:---|
| UI Framework | React 18 + Vite + TypeScript |
| Graph / canvas | **@xyflow/react v12** (React Flow) |
| State management | **Zustand** |
| Styles | **Tailwind CSS v4** |
| Charts | **Recharts** |

Why React Flow? Because it enables building drag-and-drop graphs with custom node and edge logic, without writing anything related to SVG rendering or mouse handling.

## The role of Claude Code

Both the project itself and this article were written with the help of **Claude Code** — a pair programming tool powered by Anthropic's Claude model. Claude Code assisted with the simulation engine architecture, debugging subtle bugs (like the drifting errorRate and the dropping latency under load), and iteratively refining the circuit breaker logic.

The project is live at [resilience-visualization.vercel.app](https://resilience-visualization.vercel.app/?utm_source=mlagowski.com&utm_medium=article&utm_campaign=resilience-visualizer) — open it in your browser and start experimenting with your own scenarios right away, no installation needed. You can also find it on the [project page](/projects/resilience-visualizer/).

---

*Marcin Łagowski · 2026 · Project and article written with Claude Code*
