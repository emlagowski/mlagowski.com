---
title: "Let's Be Santa!"
description: "Want to play Secret Santa with friends or family? Don't want to share your contact details?"
coverImage: "/projects/lets-be-santa/lets-be-santa-cover.png"
# images:
#   - "/projects/lets-be-santa/lets-be-santa-main-page.png"
#   - "/projects/lets-be-santa/lets-be-santa-event-page.png"
#   - "/projects/lets-be-santa/lets-be-santa-confirmation-page.png"
technologies: ["TypeScript", "React", "Next.js", "Chakra UI", "Vercel", "Supabase", "GraphQL", "Serverless"]
demo: "https://letsbesanta.com"
featured: true
date: 2020-11-15
---

![Main page](/projects/lets-be-santa/lets-be-santa-main-page.png)

## Overview

During lockdown, my friends and I had the need to draw pairs for Secret Santa. If anyone doesn't know what it's all about, it's organising a Santa party where everyone in a group of friends draws another person without revealing the result and gives them a secret gift. We wanted to do it online before the party, but all available solutions required the sharing of contact details (whatsup, email etc).

So I created solution that solved our problem and put it to the drawer. Few years later that has changed and I wanted to share it with you. You can see my [2023 Reddit post](https://www.reddit.com/r/SideProject/comments/17ueg9i/lets_be_santa_secret_santa_generator_without/) where I shared it and [2025 update](https://www.reddit.com/r/SideProject/comments/1oy9rxc/5_years_later_my_privacyfriendly_secret_santa/).

## Features

- You create an event with list of participants and share only a secret link
- No accounts, emails, or phone numbers required
- Each participant get a match and can check it one time only, so there’s no cheating
- Completely anonymous and privacy-friendly
- Simple enough for families (all ages), friends, and workplaces

## Tech Stack

- Frontend: React + Chakra UI hosted on Vercel
- Backend: free Serverless Function on Vercel
- Database: free Postgres on Supabase

So it is currently a completely free solution. You can give it a try! 

## Screenshots

![event page](/projects/lets-be-santa/lets-be-santa-event-page.png)

![confirmation page](/projects/lets-be-santa/lets-be-santa-confirmation-page.png)

## Results

Despite almost no updates and no marketing, the website quietly grew.
To this day it has generated over 26,000 Secret Santa events and helped 200,000+ participants draw their assignments. Seeing people use it every year (not only for Christmas) gives me a lot of joy — especially since this was originally just a fun experiment during lockdown.

![new events](/projects/lets-be-santa/lets-be-santa-chart-1.png)

![new participants](/projects/lets-be-santa/lets-be-santa-chart-2.png)

![analytics](/projects/lets-be-santa/lets-be-santa-analytics.jpeg)
