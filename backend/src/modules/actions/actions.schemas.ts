import * as z from "zod"
import { ActionTypeSchema } from "../../types/action_types.js"

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