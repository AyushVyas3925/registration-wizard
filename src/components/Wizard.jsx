// src/components/Wizard.jsx
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepOneSchema, stepTwoSchema } from "../lib/validation";

import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";

// Humare Steps ki list
const steps = ["Personal Info", "Account Details", "Review"];

const Wizard = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = steps.length;

    // Sirf pahele do step ke liye schema validation lagegi
    const schema = currentStep === 1
        ? stepOneSchema
        : currentStep === 2
            ? stepTwoSchema
            : undefined;

    const methods = useForm({
        resolver: schema ? zodResolver(schema) : undefined,
        mode: "onChange",
    });

    const handleNext = async () => {
        const isStepValid = await methods.trigger();
        if (isStepValid) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

    return (
        <div className="wizard-container">
            <div className="progress-bg">
                <div
                    className="progress-fill"
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>

            <p style={{ textAlign: "right", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                Step {currentStep} of {totalSteps}
            </p>

            <FormProvider {...methods}>
                {/* Yahan se regular onSubmit hata diya kyunki sab andar se control hoga*/}
                <form>
                    {/* Dikhana kya hai: 1, 2 ya 3 */}
                    {currentStep === 1 && <StepOne />}
                    {currentStep === 2 && <StepTwo />}
                    {/* NEW: Step 3 ko handleBack aur formData forward de rahe hai */}
                    {currentStep === 3 && <StepThree handleBack={handleBack} />}

                    {/* NEW: Sirf Step 1 aur 2 par bottom buttons dikhao. Step 3 apna khud handle karega */}
                    {currentStep < 3 && (
                        <div className="controls">
                            {currentStep > 1 && (
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleBack}
                                >
                                    Back
                                </button>
                            )}

                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleNext}
                                disabled={!methods.formState.isValid}
                            >
                                Next
                            </button>
                        </div>
                    )}

                </form>
            </FormProvider>
        </div>
    );
};

export default Wizard;
