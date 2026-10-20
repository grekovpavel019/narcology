import * as z from "zod";

export const updateUserSchema = z.object({
    fullname: z.string().trim().min(1),
    email: z.email()
});

export const changePasswordSchema = z.object({
    currentPassword: z.string().min(1),
    newPassword: z.string().min(8)
})