import type { ChangePasswordValues } from "./types"
import type { RegisterOptions } from "react-hook-form"

type Rules = {
    [K in keyof ChangePasswordValues]: RegisterOptions<ChangePasswordValues, K>;
}

export const changePasswordRules: Rules = {
    "currentPassword": {
        required: "Это поле обязательно",
    },

    "newPassword": {
        required: "Это поле обязательно",
        minLength: { value: 8, message: "Минимально 8 символов" },
        deps: ["confirm"]
    },

    "confirm": {
        required: "Это поле обязательно",
        validate: (value, values) => value === values.newPassword || "Пароли не совпадают"
    }

}