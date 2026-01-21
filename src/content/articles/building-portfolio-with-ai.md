---
title: "Building My Portfolio With AI: A Google Antigravity Experiment"
description: "How I built this entire portfolio website using AI-assisted development with Google Antigravity, from project setup to deployment."
date: 2025-01-20
tags: ["AI", "Google Antigravity", "Astro", "Web Development", "Portfolio"]
draft: false
featured: true
coverImage: "articles/coding.png"
---

> **Disclaimer**: This article, like the entire website you're viewing, was created with the assistance of AI — specifically Google Antigravity. The irony is not lost on me.

## The Experiment

I decided to test how far AI-assisted development has come by building my entire portfolio website from scratch using only natural language prompts. The tool of choice? **Google Antigravity** — an agentic AI coding assistant that can understand context, browse files, run commands, and make iterative improvements based on feedback.

The result is what you're looking at right now.

## Technology Stack

The AI suggested and implemented the following stack:

- **Astro 5.x** — A modern static site generator optimized for content-focused websites
- **TypeScript** — For type safety across the codebase
- **CSS Custom Properties** — A design system with CSS variables for theming
- **GitHub Pages** — For hosting and deployment via GitHub Actions

```bash
# Project initialization was as simple as:
npm create astro@latest ./
```

## Initial Requirements

Before starting, I defined clear requirements for the portfolio:

| Requirement | Status | Notes |
|-------------|--------|-------|
| Modern, minimalist design | ✅ | Dark theme with blue accents |
| Responsive layout | ✅ | Works on mobile and desktop |
| Blog/Articles section | ✅ | Markdown-based with content collections |
| Projects showcase | ✅ | Card-based grid layout |
| About page with experience timeline | ✅ | Interactive, expandable cards |
| Light/Dark theme toggle | ✅ | Persistent preference storage |
| Fast loading (static site) | ✅ | Astro's zero-JS by default |
| Easy deployment | ✅ | GitHub Actions to GitHub Pages |
| CV integration | ✅ | Parsed PDF and structured into timeline |
| Company logos on timeline | ✅ | Required providing PNG assets |

**Success rate: 100%** — all requirements were met, though some needed multiple iterations.

## Example Prompts

Here's a selection of actual prompts used during development, showing the progression from high-level to specific:

### Initial Setup
```
"I want to create a personal portfolio website. 
Modern, minimalist style. Dark theme preferred. 
Sections: home, about me, projects, articles/blog."
```

### Design Refinement
```
"The header looks too basic. Add a theme toggle button 
and make the navigation more prominent."
```

### CV Integration
```
"I have a CV in PDF format. Parse it and add the 
experience section to the About page."
```

### Timeline Iterations
```
"Group timeline entries by company to visually 
represent a cohesive work history."

"Make individual role cards more subtle in appearance."

"Implement expandable/collapsible feature for each role 
to reveal detailed bullet points and tech stacks."

"The chevron icons are too big and disrupting the layout."
```

### Visual Fine-Tuning
```
"Timeline inconsistency - some groups have dates 
at company level, others don't. Unify this."

"Position dots are shifted to the right relative 
to the timeline line."

"Logos should be bigger with white circular 
background for dark mode visibility."
```

### Hackathons Section
```
"Make it a 2-column grid, but when clicked, 
the expanded item should take full width."

"When opening the right-column card, it should 
stay in the same row and push the left card down."
```

### Final Touches
```
"Write an article about how this site was built 
with AI. Include that the article itself was 
AI-generated. Focus on technical aspects."
```

The prompts evolved from broad descriptions to increasingly specific feedback — mimicking how a developer would refine requirements with a human colleague.


## The Development Process

### 1. Project Setup

I started with a simple prompt: *"I want to create a personal portfolio website."* The AI:

1. Analyzed my requirements
2. Created an implementation plan
3. Set up the Astro project with proper configuration
4. Implemented a complete design system with light/dark theme support

### 2. Design System

The AI created a comprehensive CSS design system including:

- **Color tokens** with light and dark theme variants
- **Typography scale** using CSS custom properties
- **Spacing system** for consistent margins and padding
- **Component styles** for buttons, cards, and navigation

```css
:root {
  --color-accent: #3b82f6;
  --color-bg: #0a0a0f;
  --color-text: #f5f5f7;
  /* ... and many more */
}
```

### 3. Component Architecture

The layout was built with reusable Astro components:

```
src/
├── components/
│   ├── Layout.astro      # Base layout with head, header, footer
│   ├── Header.astro      # Navigation with theme toggle
│   └── Footer.astro      # Social links
├── pages/
│   ├── index.astro       # Homepage
│   ├── me.astro          # About page (this was the complex one)
│   ├── articles/         # Blog with markdown content
│   └── projects/         # Project showcase
└── content/
    ├── articles/         # Markdown blog posts
    └── projects/         # Project descriptions
```

### 4. Interactive Timeline

The most interesting part was building the experience timeline on the About page. Through iterative prompts, we achieved:

- **Company logos** positioned on a continuous vertical line
- **Expandable role cards** with click-to-reveal details
- **CSS Grid layout** for the hackathons section with full-width expansion
- **Smooth animations** for expand/collapse interactions

The timeline went through multiple iterations:
1. Simple list → Grouped by company
2. Dashes → Circles on timeline
3. Circles → Company logos with white background
4. Static cards → Expandable with bullet points

### 5. Deployment

CI/CD was set up with GitHub Actions:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
```

## What Worked Well

### Rapid Prototyping
The AI could generate entire page layouts in seconds. Iterating on designs was as simple as describing what I didn't like.

### Context Awareness
Antigravity maintained context across the entire conversation, remembering previous decisions and applying consistent patterns.

### Error Recovery
When things broke (and they did — especially with TypeScript linting), the AI could diagnose issues and propose fixes.

### CSS Expertise
The generated CSS was surprisingly clean, using modern features like CSS Grid, custom properties, and proper dark mode implementation.

## What Required Human Intervention

### Visual Fine-Tuning
Pixel-perfect alignment still needed manual CSS adjustments. The AI got us 90% there, but the final 10% required human eyes.

### Content Decisions
The AI could structure content, but deciding *what* to highlight required human judgment.

### Logo Assets
I had to provide the company logos myself — AI can't (yet) create brand-specific assets.

### DOM Manipulation Edge Cases
Some JavaScript behaviors, like the hackathon grid reordering, needed a few iterations to get right.

## Stats

- **Time to build**: ~3 hours of active prompting
- **Files created**: 15+ components and pages
- **Lines of code**: ~2000+ (generated, not written)
- **Manual edits**: ~50 lines of CSS tweaks

## Conclusion

AI-assisted development is not about replacing developers — it's about **amplifying capabilities**. The conversation was collaborative: I provided direction and feedback, the AI provided implementation speed and technical knowledge.

Would I use this approach for production work? **Absolutely** — with proper code review. The generated code was clean, maintainable, and followed best practices.

The future of development might just be a conversation.

---

*Built with Google Antigravity. January 2025.*
