---
title: "Znajdź Lek"
description: "A drug search tool for hospital doctors — quickly find active ingredients from brand names, search in bulk from notes, and check reimbursement status."
coverImage: "/projects/znajdzlek/znajdz-lek-cover.png"
# images:
#   - "/projects/znajdzlek/znajdz-lek-main.png"
#   - "/projects/znajdzlek/znajdz-lek-main-bulk.png"
#   - "/projects/znajdzlek/znajdz-lek-results.png"
#   - "/projects/znajdzlek/znajdz-lek-filter.png"
#   - "/projects/znajdzlek/znajdz-lek-details.png"
technologies: ["TypeScript", "React", "Tailwind", "Vercel", "Supabase", "AI", "Google Antigravity"]
# github: "https://github.com/mlagowski/example"
demo: "https://znajdzlek.vercel.app"
featured: true
date: 2025-01-15
---

<figure>
  <img src="/projects/znajdzlek/znajdz-lek-main.png" alt="Main page — single drug search" />
</figure>

## The Problem

Hospital doctors face a daily challenge: when interviewing patients about their medications, patients usually know only the **brand names** of drugs, not the **active ingredients** — which is what doctors actually need for clinical decisions.

This might sound trivial, but patients often take **20 or more medications**. Manually looking up each drug's active ingredient is incredibly time-consuming and interrupts the flow of patient care.

## The Solution

I built **Znajdź Lek** ("Find Medicine" in Polish) — a fast, practical tool that helps doctors:

1. **Search drugs by brand name** — instantly get the active ingredient
2. **Search by active ingredient** — find all brand names containing it
3. **Find alternatives** — discover substitutes and drugs with the same composition
4. **Bulk search from notes** — paste messy clinical notes and search multiple drugs at once
5. **Clean dosage information** — automatically strip dosage formats like "1x1 tabl.", "2x/d", "co 6h" from pasted notes
6. **View detailed drug information** — manufacturer, links to patient leaflet, product characteristics
7. **Check reimbursement status** — find out if a drug is reimbursed, or which alternatives are

<figure>
  <img src="/projects/znajdzlek/znajdz-lek-main-bulk.png" alt="Bulk search — paste clinical notes with multiple drugs" />
  <figcaption>Bulk search mode — paste clinical notes with multiple drugs at once.</figcaption>
</figure>

## Key Features

### Single & Bulk Search

Doctors can quickly search for individual drugs or paste entire medication lists from patient notes. The system intelligently parses messy input.

### Smart Note Cleaning

Clinical notes often contain dosage information mixed with drug names. The cleaning feature automatically removes formats like:
- "1x1 tabl."
- "3x/d."
- "4x1tabl. co 6h"
- And many more variations

<figure>
  <img src="/projects/znajdzlek/znajdz-lek-filter.png" alt="Note cleaning — remove dosage information" />
  <figcaption>Automatic cleaning of dosage information from pasted notes.</figcaption>
</figure>

### Comprehensive Drug Details

For each drug, you can access:
- Active ingredients (the most important info for doctors)
- Manufacturer information
- Direct links to patient information leaflet (PIL)
- Summary of product characteristics (SmPC)
- Reimbursement status and conditions

<figure>
  <img src="/projects/znajdzlek/znajdz-lek-details.png" alt="Drug details — active ingredients, links, reimbursement" />
  <figcaption>Detailed drug information including active ingredients and reimbursement status.</figcaption>
</figure>

### Finding Alternatives

Search results show similar drugs — both generic substitutes and medications with the same composition — helping doctors find alternatives when needed.

<figure>
  <img src="/projects/znajdzlek/znajdz-lek-results.png" alt="Search results with alternatives" />
  <figcaption>Search results display alternatives and drugs with matching active ingredients.</figcaption>
</figure>

## Data Sources

The database combines data from official Polish government sources:

- **[Register of Medicinal Products](https://rejestry.ezdrowie.gov.pl/registry/rpl)** — the official registry maintained by the Office for Registration of Medicinal Products
- **[Ministry of Health Reimbursement Announcements](https://www.gov.pl/web/zdrowie/obwieszczenia-ministra-zdrowia-lista-lekow-refundowanych)** — official list of reimbursed medicines

Both datasets were merged into a single, searchable database.

## Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Hosting**: Vercel
- **Database**: Supabase (PostgreSQL)
- **Development**: 100% built with **Google Antigravity**

## Built in 4 Hours with AI

The entire project — from concept to deployment — took approximately **4 hours** thanks to AI-assisted development with Google Antigravity.

This demonstrates the power of modern AI tools for rapid prototyping and building practical applications that solve real-world problems.
