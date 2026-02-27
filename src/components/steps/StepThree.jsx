// src/components/steps/StepThree.jsx
import { useFormContext } from "react-hook-form";
import { useState } from "react";
// Ye tick icon terminal me npm i lucide-react se laya tha
import { CheckCircle } from "lucide-react";

// handleBack: pichle pannel se control laya hai
const StepThree = ({ handleBack }) => {
    const { getValues } = useFormContext();
    const data = getValues();

    // Naya state jo track karega user ne submit click kia ya nahi
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Jab submit pe click ho
    const handleFinalSubmit = () => {
        console.log("FINAL SUBMITTED DATA => ", data); // Ye console me jayega
        setIsSubmitted(true); // Is line se neche vali if(isSubmitted) ki condition chal jayegi
    };

    // -------------------------------------------------------------
    // Agar form bharr chuka hai (Submit daba chuka hai), Toh ye SUCCESS SCREEN chalegi
    // -------------------------------------------------------------
    if (isSubmitted) {
        // Ek fake random reference number dikhane k liye
        const refId = Math.random().toString(36).substring(2, 9).toUpperCase();

        return (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <CheckCircle size={64} color="var(--success)" style={{ margin: "0 auto 1rem" }} />
                <h2 className="wizard-title" style={{ color: "var(--success)" }}>Form Submitted Successfully! 🎉</h2>
                <p className="wizard-subtitle mt-2">Your data has been recorded.</p>
                <div style={{ backgroundColor: "rgba(34, 197, 94, 0.1)", padding: "1rem", borderRadius: "8px", marginTop: "1rem" }}>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>Reference ID:</span>
                    <br />
                    <strong>{refId}</strong>
                </div>
                <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                    Please check your browser's console to see the full data object.
                </p>
            </div>
        );
    }

    // -------------------------------------------------------------
    // REVIEW SCREEN (Jo normally dikhti hai submit karne se pehle)
    // -------------------------------------------------------------
    return (
        <div>
            <h2 className="wizard-title">Review & Submit</h2>
            <p className="wizard-subtitle">Please check your details before submitting.</p>

            <div className="review-list">
                <div className="review-item">
                    <span className="review-label">First Name:</span>
                    <span>{data.firstName || "N/A"}</span>
                </div>
                <div className="review-item">
                    <span className="review-label">Last Name:</span>
                    <span>{data.lastName || "N/A"}</span>
                </div>
                <div className="review-item">
                    <span className="review-label">Date of Birth:</span>
                    <span>{data.dob || "N/A"}</span>
                </div>
                <div className="review-item">
                    <span className="review-label">Email:</span>
                    <span>{data.email || "N/A"}</span>
                </div>
                <div className="review-item">
                    <span className="review-label">Password:</span>
                    <span>********</span>
                </div>
            </div>

            {/* Dhyan dijiye: Ab Back aur Submit button WAHI PANNEL ke end pe lage hue hain */}
            <div className="controls" style={{ marginTop: "2rem", display: "flex", justifyContent: "space-between" }}>

                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleBack}
                >
                    Back
                </button>

                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleFinalSubmit}
                >
                    Submit Application
                </button>
            </div>
        </div>
    );
};

export default StepThree;
