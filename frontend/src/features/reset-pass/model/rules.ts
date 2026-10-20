import type { ResetPasswordValues } from "./types";
import type { RegisterOptions } from "react-hook-form";

type Rules = {
    [K in keyof ResetPasswordValues]:
        RegisterOptions<ResetPasswordValues, K>;
};

export const resetPasswordRules: Rules = {
    newPassword: {
        required: "Введите новый пароль",
        minLength: {
            value: 8,
            message: "Минимум 8 символов"
        }
    },
    confirmPassword: {
        required: "Подтвердите новый пароль",
        validate: (value, formValues) =>
            value === formValues.newPassword || "Пароли не совпадают"
    }
};