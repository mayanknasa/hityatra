---
wave: 1
depends_on: []
files_modified:
  - src/components/common/InquiryModal.jsx
  - src/App.jsx
  - src/components/layout/Navbar.jsx
  - src/components/home/Hero.jsx
  - src/components/home/TopSelling.jsx
  - src/components/common/TourCard.jsx
autonomous: true
---

# Phase 5: Booking & Inquiry Integration Plan

## Objective
Integrate the functional Form components for travel inquiries into a cohesive booking funnel modal.

## Requirements Addressed
- **INT-03**: Create a Booking/Inquiry form to serve as the ultimate conversion funnel. It must handle user input via controlled components, provide validation feedback, and trigger a success-state simulator on submit.

## Tasks

<task>
**Title**: Develop Inquiry Modal Component
**Description**: Build a reusable, centralized modal overlay for inquiries using Framer Motion.
<read_first>
- `src/index.css`
</read_first>
<action>
Create `src/components/common/InquiryModal.jsx`.
Accept props: `isOpen`, `onClose`, `defaultPackage` (optional string).
Use `AnimatePresence` from `framer-motion` to wrap the modal.
Structure: Fixed full-screen backdrop overlay (`rgba(0,0,0,0.6)`) with a centered `motion.div` card for the form (`scale: 0.9` to `scale: 1` entry transition).
Form State: Use `useState` for `name`, `phone`, `package` (defaulting to the prop if passed), and `isSubmitted`.
Submit Handler: `e.preventDefault()`, validate inputs (ensure phone is numeric and >8 chars, name not empty), and set `isSubmitted=true` on success, simulating an API call.
Success State: If `isSubmitted` is true, display a thank you message and a "Close" button instead of the form.
</action>
<acceptance_criteria>
- `src/components/common/InquiryModal.jsx` exports `InquiryModal`.
- Component manages standard controlled form inputs (name, phone).
- Component transitions beautifully rendering a true success flag after form submission.
</acceptance_criteria>
</task>

<task>
**Title**: Mount Modal in App
**Description**: Include the modal in the application root and manage its opened/closed state globally.
<read_first>
- `src/App.jsx`
- `src/components/common/InquiryModal.jsx`
</read_first>
<action>
Modify `src/App.jsx`.
Import `InquiryModal`.
Add `const [isModalOpen, setIsModalOpen] = useState(false)` and `const [selectedPackage, setSelectedPackage] = useState('')`.
Create a handler function `handleBookNow(packageName = '')` that sets the package state and opens the modal.
Render `<InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultPackage={selectedPackage} />` at the bottom of the App component (before Fragment closing).
</action>
<acceptance_criteria>
- `src/App.jsx` handles state `isModalOpen`.
- `App.jsx` returns the `<InquiryModal />` properly.
</acceptance_criteria>
</task>

<task>
**Title**: Wire Global Buttons to the Modal
**Description**: Ensure "Book Now" buttons across standard layout elements trigger the modal.
<read_first>
- `src/App.jsx`
- `src/components/layout/Navbar.jsx`
- `src/components/home/Hero.jsx`
</read_first>
<action>
Pass `handleBookNow` into `<Navbar onBook={() => handleBookNow()} />` from `App.jsx`.
Pass `handleBookNow` into `<Hero onBook={() => handleBookNow()} />` from `App.jsx`.
Modify `Navbar.jsx` and `Hero.jsx` to receive `onBook` and tie it to the `onClick` prop of their `<Button variant="primary">`.
</action>
<acceptance_criteria>
- `Navbar.jsx` properly accepts `onBook` and delegates it to `<Button>`.
- `Hero.jsx` properly accepts `onBook` and delegates it to `<Button>`.
</acceptance_criteria>
</task>

<task>
**Title**: Wire Tour Specific Cards to the Modal
**Description**: Ensure individual packages in TopSelling section request their specific package string.
<read_first>
- `src/App.jsx`
- `src/components/home/TopSelling.jsx`
- `src/components/common/TourCard.jsx`
</read_first>
<action>
Pass `handleBookNow` into `<TopSelling onBook={handleBookNow} />` from `App.jsx`.
Modify `TopSelling.jsx` to accept `onBook` and pass it down sequentially `onBook={onBook}` into mapped `<TourCard>` elements.
Modify `TourCard.jsx` to accept `onBook` and pass it to the "Book Now" Button's `onClick`, specifically invoking `onBook(tour.title)` so the modal pre-fills with the tour name.
</action>
<acceptance_criteria>
- `TopSelling.jsx` pipes `onBook` to `TourCard.jsx`.
- Clicking "Book Now" inside a TourCard requests the specific trip title gracefully via `onBook(tour.title)`.
</acceptance_criteria>
</task>

---
## Verification
must_haves:
- `InquiryModal.jsx` leverages `AnimatePresence`.
- Users can input their details into standard inputs inside the modal.
- Submitting successfully provides visual mock completion feedback.
- Global buttons and Tour-specific cards trigger the modal seamlessly.
