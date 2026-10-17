import * as z from "zod";

export const registerSchema = z.object({
    login: z.string().min(3).max(32).regex(/^[a-zA-Z0-9]+$/),
    email: z.email(),
    fullname: z.string().min(1),
    password: z.string().min(8),
});

export const loginSchema = z.object({
    login: z.string(),
    password: z.string()
});