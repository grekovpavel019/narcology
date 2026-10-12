import type { LoginFormValues } from "./types"
import type { RegisterOptions } from "react-hook-form"

type Rules = {
    [K in keyof LoginFormValues]: RegisterOptions<LoginFormValues, K>;
}

export const loginRules: Rules = {
    "login": { required: "Это поле обязательно" },
    "password": { required: "Это поле обязательно" }
}