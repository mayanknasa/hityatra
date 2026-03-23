# Research Summary: Hit Yatra Website

## Stack Findings

**Recommended Stack:** Vite + React, Vanilla CSS (or Tailwind depending on styling preference, but Vanilla CSS provides maximum control for intricate animations), and Framer Motion.
**Rationale:** Standard modern frontend setup; Framer Motion is the industry standard for declarative, buttery-smooth React animations. A flat JSON file is sufficient for lightweight dynamic content management without dragging in a CMS.

## Features Research

**Table Stakes (Must Haves):**
- Responsive Hero Section with video/image backgrounds and CTAs
- Tour Packages Grid (price, duration, inclusions, rating)
- Destinations / "Explore India" Grid
- Recommended / Top Selling Packages lists
- FAQ Section (Accordion)
- Customer Testimonials Carousel
- Footer with full links and social icons
- Actionable Inquiry/Booking forms (even if only hitting a simple endpoint or webhook for now)

**Differentiators:**
- Deep, performance-optimized scroll and element enter animations
- Centralized Data (`data.json`) to easily add new tour packages without touching React code
- Distinctive, premium branding focused on "Hit Yatra" instead of a generic "Vrindavan Package" template

## Architectural Patterns

**Components:**
Our architecture will be component-focused, with a single `<App />` container holding layout slices:
- `<Navbar />` (Sticky, animated)
- `<Hero />`
- `<PackageSection title="..." data={data.topSelling} />`
- `<DestinationSection data={data.destinations} />`
- `<PromoBanner />`
- `<FAQ questions={data.faq} />`
- `<Testimonials reviews={data.reviews} />`
- `<Footer />`

**Data Flow:**
On mount, the root component will fetch or import `config.json` (the single data source) and distribute the data top-down via props or simple Context.

## Pitfalls to Avoid

- **Animation Jitter:** Over animating properties. Prevent this by using Framer Motion's `useScroll` and animating only `transform` and `opacity`.
- **Complex Prop Drilling:** Can be avoided since data is relatively flat, but using a single `DataProvider` context wrapper might be better.
- **Form Submission Failures:** Mock out form submissions clearly or use simple `mailto:` / backend endpoint like Formspree so actionable links actually work from Day 1.
