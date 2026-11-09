import * as z from "zod"

export const ActionTypeSchema = z.enum([
    "register",
    "login",
    "logout",
    "page_view",
    "profile_update",
    "password_change",
    "service_created",
    "service_update",
    "service_delete"
]) 