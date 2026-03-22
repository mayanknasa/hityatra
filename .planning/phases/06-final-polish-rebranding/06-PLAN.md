---
wave: 1
depends_on: []
files_modified:
  - src/index.css
  - src/components/layout/Navbar.jsx
  - src/App.jsx
autonomous: true
---

# Phase 6: Final Polish & Rebranding Plan

## Objective
Perform a holistic sweep to remove any placeholder "Vrindavan Package" text, lock in responsiveness, and refine global scroll reveals.

## Requirements Addressed
- **POL-01**: Zero instances of "Vrindavan Package" or other default filler text across the entire codebase.
- **POL-02**: Enforce strict responsive behaviors, ensuring no horizontal overflow or hidden UI elements.
- **POL-03**: Functional smooth-scrolling behavior between the Navbar and inner components acting as an SPA.

## Tasks

<task>
**Title**: Establish True Smooth Layout Rendering
**Description**: Fix structural scrolling mechanics using native CSS.
<read_first>
- `src/index.css`
</read_first>
<action>
Modify `src/index.css` to add `html { scroll-behavior: smooth; overflow-x: hidden; }` and `body { overflow-x: hidden; }`.
This strictly ensures `#hash` links slide fluidly instead of jumping, and safeguards mobile devices from rogue horizontal overflow caused by Framer Motion entrance calculations dragging child elements awkwardly.
</action>
<acceptance_criteria>
- `src/index.css` contains `scroll-behavior: smooth`.
- `overflow-x: hidden` prevents lateral scrolling bugs.
</acceptance_criteria>
</task>

<task>
**Title**: Reveal Mobile Navigation & Anchor Routing
**Description**: Connect the `Navbar` links tightly to the mounted sections and render them on mobile.
<read_first>
- `src/components/layout/Navbar.jsx`
- `src/App.jsx`
</read_first>
<action>
Modify `src/components/layout/Navbar.jsx`.
Remove `display: 'none'` from the `.nav-links` container; instead, make it a standard flex row (or wrap it cleanly on smaller screens by leaning on `flexWrap: 'wrap'` and `gap: '1rem'`). 
Ensure the hash links map exactly to section `id`s:
- `<a href="#home">Home</a>` (Ensure `<Hero />` or `<div id="home">` exists).
- `<a href="#tours">Tour Packages</a>` (The `TopSelling` has `id="tours"`).
- `<a href="#destinations">Destinations</a>` (The `Destinations` has `id="destinations"`).
- `<a href="#faq">FAQ</a>` (The `FAQ` has `id="faq"`).
Verify `App.jsx` defines `<Hero />` inside a tag mapping `id="home"`, otherwise wrap `<Hero>` in `<div id="home">`.
</action>
<acceptance_criteria>
- `#hash` navigation scrolls contextually into correct sections.
- `Navbar` links are visible without generic inline `display: none`.
- `Hero` sits within a scrollable `id="home"` zone.
</acceptance_criteria>
</task>

<task>
**Title**: Final Global Cleanup Audit
**Description**: Audit and delete all unused initial boilerplate logic/imports to cement the project state.
<read_first>
- `src/App.jsx`
</read_first>
<action>
Check `App.jsx` for the placeholder block (`<div style={{ flex: 1, padding: '4rem 2rem', textAlign: 'center' }}>...</div>`) and completely remove it.
Verify all components are sequentially rendering the true business intent.
Run React's ES toolchain (via standard `vite build`) to guarantee no unused imports trigger warnings.
</action>
<acceptance_criteria>
- Unnecessary "Welcome to Hit Yatra" placeholder text in `App.jsx` is purged.
- Build compiles perfectly.
- "Hit Yatra" is clearly positioned as the primary brand.
</acceptance_criteria>
</task>

---
## Verification
must_haves:
- `html` behavior is defined as `scroll-behavior: smooth`.
- Navbar hash links connect properly into `Home`, `Tour Packages`, `Destinations`, `FAQ`.
- Mobile screens exhibit zero horizontal scrollbars.
- `App.jsx` structure is stripped of debug/placeholder elements resulting in a 100% genuine application experience.
