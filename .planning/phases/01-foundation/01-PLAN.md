---
wave: 1
depends_on: []
files_modified:
  - package.json
  - vite.config.js
  - src/index.css
  - src/App.jsx
  - src/main.jsx
  - src/data.json
  - src/context/DataContext.jsx
autonomous: true
---

# Phase 1: Foundation Plan

## Objective
Initialize the application infrastructure, styling framework, animations setup, and global state (data.json context).

## Requirements Addressed
- **ARCH-01**: Initialize React application (Vite-based) with modern build tools.
- **ARCH-02**: Integrate global styles, Vanilla CSS architecture, and Framer Motion for animations.
- **ARCH-03**: Implement a central `data.json` configuration file as the single source of truth for dynamic content.
- **ARCH-04**: Establish a Context or hook to provide configuration data to all components.

## Tasks

<task>
**Title**: Initialize Vite Application and Install Dependencies
**Description**: Use Vite to scaffold a React app and install required styling and animation dependencies.
<read_first>
- `package.json`
</read_first>
<action>
Run `npx create-vite@latest . --template react` in the project root if not already existing. (Use `.` to initialize in current directory).
Install `framer-motion` package using `npm install framer-motion`.
Clean up default Vite boilerplate (remove `App.css`, clear `App.jsx`, strip `index.css` down to basic resets).
</action>
<acceptance_criteria>
- `package.json` contains `framer-motion` in dependencies.
- `package.json` contains `react` and `react-dom`.
- Running `npm run build` succeeds without errors.
</acceptance_criteria>
</task>

<task>
**Title**: Set Up Global CSS and Design Tokens
**Description**: Establish the foundational CSS for the application to ensure it looks modern and premium.
<read_first>
- `src/index.css`
</read_first>
<action>
Replace the contents of `src/index.css` with a modern reset and CSS variables for a premium Hit Yatra theme.
Define `--color-primary` (e.g., `#ff7e00` for the Hit Yatra energetic orange), `--color-bg` (dark or premium light), `--color-surface`, `--color-text`, `--font-primary` ('Inter' or 'Outfit').
Include a basic body reset to remove margins and set font-family.
Ensure the design looks sleek and scalable.
</action>
<acceptance_criteria>
- `src/index.css` contains definition for `--color-primary`.
- `src/index.css` includes `box-sizing: border-box`.
</acceptance_criteria>
</task>

<task>
**Title**: Create the Unified `data.json` Configuration
**Description**: Establish the single source of truth for the entire application's dynamic data.
<read_first>
- `src/data.json`
</read_first>
<action>
Create `src/data.json` with realistic mock data based on the requirements.
Structure it with root keys: `hero` (title, subtitle), `topSelling` (array of tours with price, duration, rating), `destinations` (array), `faq` (array of q/a), `testimonials` (array of reviews), and `contact` (instagramUrl, phone).
Ensure all branding uses "Hit Yatra".
</action>
<acceptance_criteria>
- `src/data.json` exists.
- `src/data.json` contains key `"topSelling"`.
- `src/data.json` contains string `"Hit Yatra"`.
</acceptance_criteria>
</task>

<task>
**Title**: Establish Data Context
**Description**: Build a React Context Provider to make `data.json` accessible globally without prop drilling.
<read_first>
- `src/context/DataContext.jsx`
- `src/main.jsx`
- `src/App.jsx`
</read_first>
<action>
Create `src/context/DataContext.jsx`.
Import `data` from `../data.json`.
Export a `DataProvider` component and a `useData` custom hook.
Wrap the root `<App />` component in `src/main.jsx` with `<DataProvider>`.
Test the context in `src/App.jsx` by rendering the hero title from `useData()`.
</action>
<acceptance_criteria>
- `src/context/DataContext.jsx` exports `useData`.
- `src/main.jsx` contains `<DataProvider>`.
- `src/App.jsx` imports and calls `useData()`.
</acceptance_criteria>
</task>

---
## Verification
must_haves:
- `data.json` exists as the single source of truth.
- `framer-motion` is installed in `package.json`.
- Global CSS design tokens are established.
- `DataContext.jsx` handles global state distribution.
