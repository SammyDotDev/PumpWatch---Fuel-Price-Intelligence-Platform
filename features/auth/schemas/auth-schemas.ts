import { z } from "zod";

export const SignInSchema = z.object({
	username: z.string().min(1, "Username is required"),
	password: z.string().min(1, "Password is required"),
});

export type SignInFormData = z.infer<typeof SignInSchema>;

export const SignUpSchema = z.object({
	name: z.string().min(1, "Full name is required").min(2, "Name is too short"),
	email: z.string().min(1, "Email is required").email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export type SignUpFormData = z.infer<typeof SignUpSchema>;
