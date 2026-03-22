# Hit Yatra Website

## What This Is

A modern, sleek, and animation-rich travel platform for "Hit Yatra". Built in React using Vite and Framer Motion, it features a highly polished user interface with scroll animations and dynamic components. The entire site's content is powered by a single configurable `.json` file, making it easy to update tour packages, pricing, categories, and testimonials without a complex backend.

## Core Value

A visually stunning, premium animated user experience that effortlessly showcases travel packages and seamlessly drives direct traveler inquiries and bookings.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

(None yet — ship to validate)

### Active

<!-- Current scope. Building toward these. -->

- [ ] Develop a responsive, modern React UI modeled after the provided travel agency layout.
- [ ] Integrate heavy use of smooth animations (scroll reveals, card lifts) using Framer Motion.
- [ ] Implement a dynamic data architecture driven entirely by a single `.json` configuration file.
- [ ] Rebrand all visible content and packages to "Hit Yatra", sweeping out any placeholder names.
- [ ] Prominently feature and link the official Instagram URL: `https://www.instagram.com/hit_yatra/`.
- [ ] Create actionable "Book Now" buttons and inquiry forms (to be wired up to a backend/messaging service in the future).

### Out of Scope

<!-- Explicit boundaries. Includes reasoning to prevent re-adding. -->

- **Custom Backend / Database CMS** — We are using a single JSON file for data management to keep the architecture simple and maintainable for Phase 1.
- **User Authentication / Accounts** — Focus is on direct bookings and inquiries rather than requiring users to create accounts.

## Context

- **Technical Environment**: React (Vite base), Vanilla CSS / Tailwind (for styling), Framer Motion (for animations).
- **Inspiration**: A screenshot of an existing travel booking platform, with full freedom to tweak and improve the design.
- **Goal**: Elevate the design to be much more premium and lively than a static layout.

## Constraints

- **Tech Stack**: Must use React.
- **Data Architecture**: Must rely on a single JSON file for all configurable data (tours, pricing, reviews).

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use Vite + React | Modern frontend foundation; fast builds and great developer experience. | — Pending |
| Framer Motion for animations | Meets the "full of animations" requirement with smooth performance. | — Pending |
| JSON-driven content | Avoids backend overhead while keeping the site dynamic. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-22 after initialization*
