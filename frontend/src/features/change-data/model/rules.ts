import type { RegisterOptions } from "react-hook-form";
import type { ChangeDataFormValues } from "./types";

type Rules = {
    [K in keyof ChangeDataFormValues]: RegisterOptions<ChangeDataFormValues, K>
}

export const changeDataRules: Rules = {
    "fullname": {
        minLength: { value: 3, message: "Минимально 3 символа"}
    },

    "email": {
        pattern: { value: /^\S+@\S+\.\S+$/, message: "Некорректная почта" },
    },
}