import type { ForgotPasswordValues } from "./types"
import type { RegisterOptions } from "react-hook-form"

type Rules = {
    [K in keyof ForgotPasswordValues]: RegisterOptions<ForgotPasswordValues, K>;
}

export const forgotPasswordRules: Rules = {
    
    "email": {
        required: "Введите email",
        pattern: { value: /^\S+@\S+\.\S+$/, message: "Некорректная почта" },
    }
}