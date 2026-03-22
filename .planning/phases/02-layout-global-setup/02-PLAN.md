---
wave: 1
depends_on: []
files_modified:
  - src/components/layout/Navbar.jsx
  - src/components/layout/Footer.jsx
  - src/components/home/Hero.jsx
  - src/App.jsx
autonomous: true
---

# Phase 2: Layout & Global Setup Plan

## Objective
Construct the main navigational layout, footer, and a prominent animated Hero section.

## Requirements Addressed
- **LAY-01**: Create a responsive Top Navigation Bar featuring the "Hit Yatra" branding and an actionable "Book Now" CTA.
- **LAY-02**: Develop a Hero section with a visually striking background, primary headline, subheadline, and primary booking CTA.
- **LAY-03**: Construct a comprehensive Footer featuring company information, navigation links, and social media icons (including the specific Instagram URL).

## Tasks

<task>
**Title**: Develop Responsive Navbar Component
**Description**: Build a sticky navigation bar with full branding and call-to-action button.
<read_first>
- `src/data.json`
</read_first>
<action>
Create `src/components/layout/Navbar.jsx`.
Import `motion` from `framer-motion` to animate the navbar on scroll or load (e.g., slide down).
Implement a sticky header with `position: fixed; top: 0; width: 100%; z-index: 50;`.
Include "Hit Yatra" text logo on the left (styled with `--color-primary`).
Include simple links (Home, Tour Packages, Destinations, Contact) in the middle (hide on mobile if needed or use a basic flex layout).
Include a visually prominent "Book Now" button on the right edge.
Add styling to contrast against the hero background (e.g., solid white background with a `--shadow-sm`).
</action>
<acceptance_criteria>
- `src/components/layout/Navbar.jsx` contains "Hit Yatra".
- `Navbar.jsx` exports a functional component.
- The component includes a button with the text "Book Now".
</acceptance_criteria>
</task>

<task>
**Title**: Develop Hero Section Component
**Description**: Enhance the Hero section to act as a proper standalone component featuring striking imagery.
<read_first>
- `src/App.jsx`
- `src/data.json`
</read_first>
<action>
Create `src/components/home/Hero.jsx`.
Retrieve `hero` content via `useData()` from `src/context/DataContext.jsx`.
Implement a full-width background wrapper using a placeholder striking image (like `https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=2000` — Taj Mahal or India Gate) with a dark overlay to make text readable.
Migrate the existing motion text and CTA button from `App.jsx` into this `Hero.jsx` component.
Style the text: hero title white (`#fff`), subtitle slightly muted white.
</action>
<acceptance_criteria>
- `src/components/home/Hero.jsx` imports `useData`.
- `src/components/home/Hero.jsx` contains an `img` or `background-image` CSS rule for the hero background.
</acceptance_criteria>
</task>

<task>
**Title**: Develop Footer Component
**Description**: Build a comprehensive footer that connects the user to external links.
<read_first>
- `src/data.json`
</read_first>
<action>
Create `src/components/layout/Footer.jsx`.
Retrieve `contact` details via `useData()`.
Implement a multi-column footer layout (flexbox or CSS grid):
- Column 1: "Hit Yatra" branding and a brief company description.
- Column 2: Quick Links (Home, Tours, FAQ, Terms).
- Column 3: Contact details pulling `phone`, `email`, and `address` from `contact` object.
- Column 4: Social Links, specifically applying an anchor tag href linking to `contact.instagramUrl` (`https://www.instagram.com/hit_yatra/`).
Ensure the background is dark (e.g., `#1a202c`) and text is mostly white.
</action>
<acceptance_criteria>
- `src/components/layout/Footer.jsx` connects to `contact.instagramUrl`.
- Component renders `contact.phone`.
</acceptance_criteria>
</task>

<task>
**Title**: Integrate Layout Components into App
**Description**: Render the Navbar, Hero, and Footer properly within the main App tree.
<read_first>
- `src/App.jsx`
</read_first>
<action>
Modify `src/App.jsx`.
Remove the inline Hero code currently present in `App.jsx`.
Import `Navbar`, `Hero`, and `Footer` components.
Render them in order: `<Navbar />` inside a wrapper or fragment, followed by a `<main>` tag wrapping `<Hero />`, followed by `<Footer />`.
Add a top padding or margin to `<main>` if the Navbar overlaps it (since Navbar is fixed/sticky).
</action>
<acceptance_criteria>
- `src/App.jsx` imports `Navbar` and `Footer`.
- `App.jsx` renders `<Hero />`.
- `npm run build` exits 0.
</acceptance_criteria>
</task>

---
## Verification
must_haves:
- Top Navigation Bar contains "Hit Yatra" branding and "Book Now" CTA.
- Hero section utilizes background image and `useData()` for text.
- Footer features the specific Instagram URL: `https://www.instagram.com/hit_yatra/`.
- The layout is successfully integrated into `App.jsx`.
