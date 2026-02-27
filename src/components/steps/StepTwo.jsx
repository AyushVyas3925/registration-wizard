import { useFormContext } from "react-hook-form";
import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";

const StepTwo = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <h2 className="wizard-title">Account Details</h2>
            <p className="wizard-subtitle">Secure your account with a password.</p>

            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                    <input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        {...register("email")}
                        className={errors.email ? "invalid" : ""}
                    />
                </div>
                {errors.email && <p className="error-text">{errors.email.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        {...register("password")}
                        className={errors.password ? "invalid" : ""}
                    />
                    <button
                        type="button"
                        className="eye-btn"
                        onClick={togglePasswordVisibility}
                        aria-label="Toggle password visibility"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
                {errors.password && <p className="error-text">{errors.password.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-wrapper">
                    <input
                        id="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        {...register("confirmPassword")}
                        className={errors.confirmPassword ? "invalid" : ""}
                    />

                </div>
                {errors.confirmPassword && (
                    <p className="error-text">{errors.confirmPassword.message}</p>
                )}
            </div>
        </div>
    );
};

export default StepTwo;