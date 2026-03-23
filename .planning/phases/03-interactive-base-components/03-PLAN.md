---
wave: 1
depends_on: []
files_modified:
  - src/components/common/Button.jsx
  - src/components/common/TourCard.jsx
  - src/components/common/DestinationCard.jsx
  - src/components/layout/Navbar.jsx
  - src/components/home/Hero.jsx
autonomous: true
---

# Phase 3: Interactive Base Components Plan

## Objective
Build reusable, highly-polished display components (cards, animated buttons) to establish the interactive foundation of the Hit Yatra site.

## Requirements Addressed
- **INT-01**: Create highly polished Card components for tours featuring hover animations, image zoom effects, and layout shifts using Framer Motion.
- **INT-02**: Develop sleek, animated actionable buttons throughout the site.

## Tasks

<task>
**Title**: Develop Reusable Animated Button Component
**Description**: Create a fundamental `Button.jsx` taking variants and integrating Framer Motion hover/tap states.
<read_first>
- `src/index.css`
</read_first>
<action>
Create `src/components/common/Button.jsx`.
Accept props: `children`, `variant` (primary, outline), `onClick`, `className`.
Wrap it in a `<motion.button>` component.
Apply `whileHover={{ scale: 1.05 }}` and `whileTap={{ scale: 0.95 }}`.
Style primary as background `--color-primary` with white text, and outline as transparent with `--color-primary` border and text.
</action>
<acceptance_criteria>
- `src/components/common/Button.jsx` exports a `Button` functional component.
- The component code contains `motion.button`.
- The component handles `whileHover` and `whileTap` attributes.
</acceptance_criteria>
</task>

<task>
**Title**: Refactor Existing Buttons
**Description**: Integrate the new reusable `Button` component into Navbar and Hero.
<read_first>
- `src/components/layout/Navbar.jsx`
- `src/components/home/Hero.jsx`
- `src/components/common/Button.jsx`
</read_first>
<action>
Modify `src/components/layout/Navbar.jsx` to replace the raw `<button>` tag with `<Button variant="primary">Book Now</Button>`.
Modify `src/components/home/Hero.jsx` to replace its `<button>` tag with `<Button variant="primary">{hero.ctaText}</Button>`.
Ensure styles map correctly and existing functionality remains visually equivalent but now animated.
</action>
<acceptance_criteria>
- `src/components/layout/Navbar.jsx` imports `Button` from `../common/Button`.
- `src/components/home/Hero.jsx` imports `Button` from `../common/Button`.
</acceptance_criteria>
</task>

<task>
**Title**: Develop Tour Card Component
**Description**: Create an interactive card matching the mockup for tour packages.
<read_first>
- `src/index.css`
</read_first>
<action>
Create `src/components/common/TourCard.jsx`.
Accept `tour` prop (object with: `title`, `duration`, `price`, `rating`, `reviews`, `image`, `tag`).
Structure: Outer `motion.div` configured for simple entry animations, wrapping a container with `overflow: hidden`.
Image wrapper: Top portion containing `img` mapping to `tour.image`.
Content wrapper: Bottom portion containing title, duration, rating, pricing, and a "Book Now" Button.
Animations: Apply `whileHover` to the outer container that causes the `img` to slowly zoom (scale up to 1.1) and lifts the card itself (y: -5, box-shadow increased).
Tag: A small absolute badge over the image if `tour.tag` exists.
</action>
<acceptance_criteria>
- `src/components/common/TourCard.jsx` exports `TourCard`.
- Component renders `tour.title` and `tour.price`.
- Code uses `motion.div` for hover animations.
</acceptance_criteria>
</task>

<task>
**Title**: Develop Destination Card Component
**Description**: Create a simpler card specifically for visualizing destinations natively.
<read_first>
- `src/index.css`
</read_first>
<action>
Create `src/components/common/DestinationCard.jsx`.
Accept `destination` prop (object with: `name`, `image`).
Structure: Full-height `overflow: hidden` container serving as the card.
Image: Background or absolutely positioned `img` taking 100% dimensions.
Text Overlay: Dark gradient overlay moving up from the bottom with `destination.name` centered or aligned.
Animations: Use `motion.div` so hovering zooms the image slightly while the text pops or the overlay darkens.
</action>
<acceptance_criteria>
- `src/components/common/DestinationCard.jsx` exports `DestinationCard`.
- Component renders `destination.name`.
</acceptance_criteria>
</task>

---
## Verification
must_haves:
- `Button.jsx` is successfully implemented using `motion.button`.
- `Navbar` and `Hero` use the new interactive `Button`.
- `TourCard.jsx` exists and accepts a `tour` object prop.
- `DestinationCard.jsx` exists and applies interactive image zoom states.
