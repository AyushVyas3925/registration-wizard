# The Registration Wizard - Multi-Step SPA

A sleek, responsive, and dynamic Single Page Application (SPA) built with React, React Hook Form, and Zod. It features a multi-step onboarding flow, real-time validation, centralized state management, and a premium glassmorphic UI.

---

## 📑 Table of Contents
- [Demo](#-demo)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Usage](#-usage)
- [How It Works](#-how-it-works)
- [Responsive Design](#-responsive-design)
- [Acknowledgments](#-acknowledgments)
- [Contact](#-contact)

---

## 🚀 Demo
Check out the live version here:  
👉 **[Live Demo Link](https://registration-wizard-bice.vercel.app/)** 

---

## ✨ Features

- 📝 **Multi-Step Form**: Broken down into "Personal Info", "Account Details", and "Review" for a seamless UX.
- 🛡️ **Bulletproof Validation**: Powered by Zod and React Hook Form (RHF) ensuring correct emails, strong passwords, and date validations before submission.
- 🔗 **Inline Success Screen**: Form submission triggers a success view dynamically without external routing or reloading.
- 📦 **Global State Management**: React Hook Form's `FormProvider` handles complex state lifting without prop drilling.
- 🎨 **Premium UI**: Modern dark-themed, glassmorphism-inspired design with real-time error messages and smooth animations.
- 📱 **Fully Responsive**: Adapts elegantly across desktop and mobile screens.
- 👁️ **Password Toggle**: Easily reveal or hide passwords with integrated SVG icons.

---

## 🛠 Technologies Used

-   **React**: Component-based UI library for building interactive interfaces.
-   **React Hook Form (RHF)**: For efficient, performant, and centralized form state management.
-   **Zod**: For strict, type-safe schema validation.
-   **Vite**: Next-generation frontend tooling for an amazingly fast dev environment.
-   **Vanilla CSS**: Custom styling, gradients, animations, and glassmorphic effects.
-   **Lucide React**: For sleek, scalable SVG icons (Checkmarks, Eyes).

---

## 🚀 Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/AyushVyas3925/registration-wizard.git
    cd registration-wizard
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    # Also ensure hook forms and validation libraries are installed
    npm install react-hook-form zod @hookform/resolvers lucide-react
    ```

3.  **Run the Development Server**:
    ```bash
    npm run dev
    ```
    *   The app will launch at `http://localhost:5173` (or similar).

4.  **Build for Production**:
    ```bash
    npm run build
    ```

---

## 📖 Usage

1.  **Enter Personal Info**: Provide your name and date of birth (must be 18+) on Step 1.
2.  **Provide Account Details**: Setup your email and password on Step 2. Passwords must match and meet length requirements. Toggle visibility using the eye icon.
3.  **Review Submission**: Verify all your collected data on Step 3 before finalizing the process. You can go back anytime using "Back" to adjust entries.
4.  **Submit**: Click "Submit Application" to instantly see the success confirmation, along with a reference ID.

---

## 🧠 How It Works

1.  **Component Architecture**: Separated cleanly into `Wizard.jsx` (Master Form Wrapper) and localized components (`StepOne.jsx`, `StepTwo.jsx`, `StepThree.jsx`).
2.  **State Management**: `FormProvider` is utilized at the root of `Wizard.jsx` so deeply nested inputs can seamlessly register and unregister logic without bulky props.
3.  **Validation**: A schema mapping maps Zod definitions from `src/lib/validation.js` directly to the active step, strictly preventing navigation if constraints fail.
4.  **Dynamic UI Rendering**: Instead of using libraries like React Router, components conditionally mount or dismount rapidly based purely on the `currentStep` and `isSubmitted` state properties within a Single Page.

---

## 📱 Responsive Design

-   **Mobile Layout**: The form takes up appropriate width with legible font sizes and vertically stacked input areas.
-   **Desktop Layout**: A focused container centered in the screen utilizing backdrop blurs and subtle glow shadows.
-   **Adaptive Controls**: Form buttons adapt visually according to whether they are disabled or active ensuring absolute clarity for users regardless of the device.

---

## 👏 Acknowledgments

-   **React Hook Form**: For drastically reducing boilerplate and increasing rendering performance.
-   **Prodesk IT Team**: For laying out challenges to replicate enterprise-level validations.
-   **Lucide React**: For beautiful open-source iconography.
-   **Zod**: For providing incredibly rigid data-validation structures.

---

## 📬 Contact

**Ayush Vyas**

-   📧 Email: s.ayushvyas3925@gmail.com
-   🔗 LinkedIn: [Ayush Vyas](https://www.linkedin.com/in/ayush-vyas-287980286/)

---
*Created for the Week 7 Project.*
