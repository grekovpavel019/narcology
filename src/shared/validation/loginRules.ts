import type { RegisterOptions } from "react-hook-form";

type LoginField = {
    login: string;
}

export const loginRules: RegisterOptions<LoginField, "login"> = {
    required: "Это поле обязательно",
    pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: "Только цифры и латинские буквы"
    },
    minLength: {
        value: 3,
        message: "Минимально 3 символа"
    },
    maxLength: {
        value: 20,
        message: "Максимум 20 символов"
    }
}