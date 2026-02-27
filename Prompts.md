# Development Journey & AI Collaboration

This document captures the iterative process of building the **Registration Wizard SPA**. It reflects the key technical questions, architectural decisions, and debugging sessions I initiated while developing this multi-step onboarding form.

---

## 🏗️ Level 1: Core Form Structure & State

**Goal**: Establish the multi-step form views and implement basic conditional rendering without external libraries.

### 1. Initial Setup & React State
> "I need to build a 'Registration Wizard' onboarding form. It has to feature three separate views: Personal Info, Account Details, and Review & Submit. Instead of using React Router, how can I use conditional rendering (`{step === 1 && <StepOne />}`) and a master `formData` state in the parent `Wizard.jsx` component to hold user data across the steps?"

### 2. Preserving Form Data
> "When the user types their name on Step 1, clicks 'Next' to go to Step 2, and then clicks 'Back', the name field is empty. How do I lift the state up and pass `formData` and `setFormData` as props so the fields stay populated when navigating back and forth?"

### 3. Submission Logging
> "I have finished step 3 (Review & Submit). I don't need a backend API yet. How do I attach an `onSubmit` handler that will cleanly `console.log()` the aggregated `formData` object and swap the view to a 'Success!' screen inside the same component?"

---

## 🛡️ Level 2: Intermediate Validation & Polish

**Goal**: Enforce client-side validation logic and enhance the UX with real-time feedback.

### 4. Real-Time Regex Validation
> "I want to prevent users from typing invalid emails. How do I implement a Regular Expression (Regex) check so that if the email doesn't contain an `@` symbol, a red warning text appears below the input immediately as they type, without waiting for them to click Submit?"

### 5. Disabled Navigation and Custom Rules
> "I need my 'Next' button to be unclickable (disabled) until all fields in the current step are valid. Also, how do I write logic to ensure the user's password is at least 8 characters long and exactly matches the 'Confirm Password' input before moving forward?"

### 6. Show/Hide Password Toggle
> "I've installed `lucide-react` for icons. How do I create a boolean state `const [showPassword, setShowPassword] = useState(false)` so that when the user clicks the Eye icon inside the password input, it toggles the input's `type` attribute between `text` and `password`?"

---

## 🚀 Level 3: Advanced Optimization (RHF + Zod)

**Goal**: Refactor the custom state management into enterprise-grade libraries for better performance and safety.

### 7. Refactoring to React Hook Form
> "Prop drilling the form data and handlers to my step components is getting messy, and re-rendering every time a user types a letter is inefficient. How do I refactor my application to use `react-hook-form`? Specifically, how do I setup `<FormProvider>` in the parent `Wizard` component and use `useFormContext()` inside my steps?"

### 8. Implementing Zod Schema
> "Instead of writing standard `if/else` checks for every input, I want to use `zod` for type-safe schema validation. Can you help me write `stepOneSchema` and `stepTwoSchema` to enforce requirements (like a custom `.refine` method to check that the Date of Birth makes the user 18+ years old) and integrate it using `@hookform/resolvers`?"

### 9. Inline Success Screen Flow
> "I want to refine the submit flow. On the final Review page (Step 3), the 'Submit' and 'Back' buttons should be inside the Review component itself, not the parent. Furthermore, on submit, the page shouldn't reload. Instead, the Review summary should disappear, and a Success Confirmation with a generated Reference ID should conditionally render on the exact same page."
