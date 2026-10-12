import type { RegisterOptions } from "react-hook-form";

type PasswordValues = {
    password: string
}

export const passwordRules: RegisterOptions<PasswordValues, "password"> = {
    required: "Это поле обязательно",
    minLength: {
        value: 8,
        message: "Минимально 8 символов"
    }
}