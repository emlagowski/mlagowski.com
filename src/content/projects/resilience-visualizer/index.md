---
title: "Resilience Visualizer"
description: "An interactive browser-based simulator for microservices resilience patterns — circuit breakers, thread pool exhaustion, cascading failures, and more."
coverImage: "/projects/resilience-visualization/demo-1-ok.png"
coverTheme: "dark"
technologies: ["React", "TypeScript", "Vite", "Zustand", "React Flow", "Tailwind CSS", "Recharts", "Vercel", "Claude Code"]
demo: "https://resilience-visualization.vercel.app/?utm_source=mlagowski.com&utm_medium=projects&utm_campaign=resilience-visualizer"
featured: true
date: 2026-03-15
---

## About the project

**Resilience Visualizer** is an interactive simulator for microservices resilience patterns that runs entirely in the browser — no installation, no backend, no infrastructure.

The idea came from a recurring problem: concepts like *circuit breaker*, *thread pool exhaustion*, or *cascading failure* are hard to explain with words or a static diagram. You can draw arrows and boxes, but that doesn't show what happens over time — how one slow service can bring down an entire system, or how a well-configured circuit breaker isolates the failure and protects everything else.

The tool lets you draw any microservices architecture as a graph, fire real-time traffic through it, and watch exactly what breaks and why.

## Demo

<video controls width="100%" style="border-radius: 8px; margin: 1.5rem 0;">
  <source src="/projects/resilience-visualization/demo.mov" type="video/mp4" />
  Your browser does not support video playback.
</video>

## Screenshots

<figure>
  <img src="/projects/resilience-visualization/demo-1-ok.png" alt="Resilience Visualizer – system running normally" />
  <figcaption>System running normally — nodes are green, requests flow through the BFF architecture with a load balancer.</figcaption>
</figure>

<figure>
  <img src="/projects/resilience-visualization/demo-1-bad.png" alt="Resilience Visualizer – cascading failure in progress" />
  <figcaption>Cascading failure — an overloaded backend exhausts BFF threads, which starts rejecting client requests.</figcaption>
</figure>

<figure>
  <img src="/projects/resilience-visualization/demo-2-storm.png" alt="Resilience Visualizer – retry storm" />
  <figcaption>Retry storm — a sudden traffic spike overwhelms the gateway, threads are exhausted, the system enters an error spiral.</figcaption>
</figure>

<figure>
  <img src="/projects/resilience-visualization/demo-3-mesh.png" alt="Resilience Visualizer – e-commerce microservice mesh" />
  <figcaption>Microservice mesh — Gateway → User/Product/Inventory Service → separate databases. A realistic production scenario.</figcaption>
</figure>

## Key features

- **Circuit Breaker** with three threshold modes: Count, Percentage, Both — full closed→open→half-open→closed lifecycle
- **Platform vs Virtual/Async threads** toggle — demonstrates how blocking I/O causes thread starvation vs async models
- **Load Balancer** with round-robin, random, and least-connections strategies
- **Kill / Recover** buttons per node for chaos engineering — configuration is preserved on recovery
- **Dual error metrics**: windowed Err%(W) for fast node coloring, cumulative Err%(∑) for long-term trends
- **8 built-in scenarios**: Cascading Failure, Circuit Breaker Demo, Retry Storm, Microservice Mesh, Timeout Tuning, and more
- **Real-time metrics** per node: RPS, avg/p99 latency, error rate, thread pool and connection pool utilization
- **Speed control** from 0.1× to 10×

## Try it

**[resilience-visualization.vercel.app →](https://resilience-visualization.vercel.app/?utm_source=mlagowski.com&utm_medium=projects&utm_campaign=resilience-visualizer)**

Open it in your browser, pick a preset scenario, hit Play, then kill a node and watch what happens.

## Read more

For a deep dive into the simulation engine, the bugs I found along the way, and how Claude Code helped build this — read the [full article](/articles/resilience-visualizer/).
