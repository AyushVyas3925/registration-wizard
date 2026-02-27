import { useFormContext } from "react-hook-form";

const StepOne = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <h2 className="wizard-title">Personal Information</h2>
            <p className="wizard-subtitle">Tell us a bit about yourself.</p>


            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <div className="input-wrapper">
                    <input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        {...register("firstName")}
                        className={errors.firstName ? "invalid" : ""}
                    />
                </div>

                {errors.firstName && <p className="error-text">{errors.firstName.message}</p>}
            </div>


            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <div className="input-wrapper">
                    <input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        {...register("lastName")}
                        className={errors.lastName ? "invalid" : ""}
                    />
                </div>
                {errors.lastName && <p className="error-text">{errors.lastName.message}</p>}
            </div>


            <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <div className="input-wrapper">
                    <input
                        id="dob"
                        type="date"
                        {...register("dob")}
                        className={errors.dob ? "invalid" : ""}
                    />
                </div>
                {errors.dob && <p className="error-text">{errors.dob.message}</p>}
            </div>
        </div>
    );
};

export default StepOne;
