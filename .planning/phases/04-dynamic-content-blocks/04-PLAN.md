---
wave: 1
depends_on: []
files_modified:
  - src/components/home/TopSelling.jsx
  - src/components/home/Destinations.jsx
  - src/components/home/FAQ.jsx
  - src/components/home/Testimonials.jsx
  - src/App.jsx
autonomous: true
---

# Phase 4: Dynamic Content Blocks Plan

## Objective
Implement the bulk of the landing page sections feeding off the `data.json` schema.

## Requirements Addressed
- **CONT-01**: Map `data.topSelling` to render grid of `TourCard` components.
- **CONT-02**: Develop Explore Destinations block mapping `data.destinations` to `DestinationCard`.
- **CONT-03**: Create an interactive FAQ accordion representing `data.faq`.
- **CONT-04**: Map `data.testimonials` to a responsive component grid or slider.
- **CONT-05**: Integrate all of the above dynamically into `App.jsx`.

## Tasks

<task>
**Title**: Develop Top Selling Packages Section
**Description**: Retrieve `topSelling` array from Context and render interactive `TourCard` grid.
<read_first>
- `src/components/common/TourCard.jsx`
- `src/context/DataContext.jsx`
</read_first>
<action>
Create `src/components/home/TopSelling.jsx`.
Import `useData` and fetch `topSelling`.
Import `TourCard`.
Create a responsive grid (`display: grid` or `flex-wrap`) to display the array of tours.
Include a prominent section header (e.g., "Trending Packages").
Animate the staggered entrance of cards using Framer Motion (e.g., `viewport={{ once: true }}`).
</action>
<acceptance_criteria>
- `src/components/home/TopSelling.jsx` exports `TopSelling`.
- Code maps over `topSelling` producing `<TourCard />` components.
</acceptance_criteria>
</task>

<task>
**Title**: Develop Destinations Section
**Description**: Retrieve `destinations` array and render interactive `DestinationCard` grid.
<read_first>
- `src/components/common/DestinationCard.jsx`
- `src/context/DataContext.jsx`
</read_first>
<action>
Create `src/components/home/Destinations.jsx`.
Import `useData` and fetch `destinations`.
Import `DestinationCard`.
Create a clean row or dense grid.
Include a prominent section header (e.g., "Explore Divine Destinations").
Animate the section entrance.
</action>
<acceptance_criteria>
- `src/components/home/Destinations.jsx` exports `Destinations`.
- Code maps over `destinations` producing `<DestinationCard />` components.
</acceptance_criteria>
</task>

<task>
**Title**: Develop FAQ Accordion Section
**Description**: Construct a collapsible FAQ feeding off `data.faq`.
<read_first>
- `src/context/DataContext.jsx`
</read_first>
<action>
Create `src/components/home/FAQ.jsx`.
Import `useData` and fetch `faq`.
Build a stateful accordion component: track active `index`.
Utilize `framer-motion` `<motion.div>` for `height: 0` to `height: auto` transition on the answer to ensure smooth collapse/expand.
Include a prominent section header (e.g., "Frequently Asked Questions").
</action>
<acceptance_criteria>
- `src/components/home/FAQ.jsx` exports `FAQ`.
- Code maps over `faq`.
- Clicking a question expands the answer smoothly using Framer Motion capabilities or CSS transitions.
</acceptance_criteria>
</task>

<task>
**Title**: Develop Testimonials Section
**Description**: Present `data.testimonials` in a highly styled grid.
<read_first>
- `src/context/DataContext.jsx`
</read_first>
<action>
Create `src/components/home/Testimonials.jsx`.
Import `useData` and fetch `testimonials`.
For MVP, create a CSS grid rendering 'cards' for each testimonial including the user's name, text, and 5-star rating icon visuals.
Format with a different background color (e.g., extremely light gray) to break up the flow.
Ensure Framer Motion fades these in `whileInView`.
</action>
<acceptance_criteria>
- `src/components/home/Testimonials.jsx` exports `Testimonials`.
- Mapped review cards display `testimonial.text`.
</acceptance_criteria>
</task>

<task>
**Title**: Refactor App.jsx Layout Integration
**Description**: Stitch all content blocks inside `<main>` seamlessly.
<read_first>
- `src/App.jsx`
</read_first>
<action>
Modify `src/App.jsx`.
Import `TopSelling`, `Destinations`, `FAQ`, and `Testimonials`.
Replace the placeholder text ("Scroll down to see our packages...") below the `<Hero />` with these exact components in order:
1. `<Destinations />`
2. `<TopSelling />`
3. `<Testimonials />`
4. `<FAQ />`
Ensure vertical rhythmic spacing (e.g., `gap: '4rem'` or explicit section paddings).
</action>
<acceptance_criteria>
- `src/App.jsx` cleanly imports all 4 newly built sections.
- They render within the `<main>` wrapper.
- `npm run build` succeeds without unresolved export errors.
</acceptance_criteria>
</task>

---
## Verification
must_haves:
- `TopSelling.jsx` exists and relies on global context.
- `Destinations.jsx` exists and relies on global context.
- `FAQ.jsx` exists and provides collapsible behavior.
- `Testimonials.jsx` displays context-data.
- Layout integrates them properly inside `App.jsx`.
