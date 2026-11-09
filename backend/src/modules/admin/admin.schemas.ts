import * as z from "zod";
import { ActionTypeSchema } from "../../types/action_types.js";

export const statisticsSchema = z.object({
    action: z.union([ActionTypeSchema, z.literal("all")]),
    groupBy: z.enum(["hour", "day", "week", "month"]),
    order: z.enum(["asc", "desc"])
});