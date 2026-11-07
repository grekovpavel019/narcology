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

export const LogActionSchema = z.object({
    userId: z.number().nullable(),
    action: ActionTypeSchema,
    target: z.string().nullable(),
    ip: z.union([
        z.ipv4(),
        z.ipv6()
    ]).nullable()
})

export type ActionType = z.infer<typeof ActionTypeSchema>

export type LogActionParams = z.infer<typeof LogActionSchema>