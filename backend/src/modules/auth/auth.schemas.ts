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

export const forgotPasswordSchema = z.object({
    email: z.string().trim().email("Некорректный email")
});

export const resetPasswordSchema = z.object({
    token: z.string().min(1, "Отсутствует токен"),
    newPassword: z.string().min(8, "Пароль должен содержать минимум 8 символов")
});