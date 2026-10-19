import * as z from "zod";

export const updateUserSchema = z.object({
    fullname: z.string().trim().min(1),
    email: z.email()
});