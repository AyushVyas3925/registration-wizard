import { z } from "zod";
export const stepOneSchema = z.object({
    firstName: z.string().min(2, "Name must be at least 2 characters long"),
    lastName: z.string().min(2, "Name must be at least 2 characters long"),
    dob: z.string().refine((dataString) => {
        if (!dataString) return false;
        const userDate = new Date(dataString);
        const today = new Date();

        const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
        return userDate <= eighteenYearsAgo;
    },
        "Age must be at least 18 years"),
});

export const stepTwoSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string()
}).refine((data) =>
    data.password === data.confirmPassword,
    {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    }
);

