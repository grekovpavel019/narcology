import type { RegisterFormValues } from "./types"
import type { RegisterOptions } from "react-hook-form"

type Rules = {
    [K in keyof RegisterFormValues]: RegisterOptions<RegisterFormValues, K>;
}

export const registerRules: Rules = {
    "login": {
        required: "Это поле обязательно",
        minLength: { value: 3, message: "Минимум 3 символа" },
        maxLength: { value: 20, message: "Максимум 20 символов" },
        pattern: { value: /^[a-zA-Z0-9]+$/, message: "Только цифры и латинские буквы" }
    },

    "fullname": {
        required: "Это поле обязательно"
    },

    "email": {
        required: "Это поле обязательно",
        pattern: { value: /^\S+@\S+\.\S+$/, message: "Некорректная почта" },
    },

    "password": {
        required: "Это поле обязательно",
        minLength: { value: 8, message: "Минимально 8 символов" },
        deps: ["confirm"]
    },

    "confirm": {
        required: "Это поле обязательно",
        validate: (value, values) => value === values.password || "Пароли не совпадают"
    }
}