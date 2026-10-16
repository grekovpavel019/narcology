import * as z from "zod";

const authSchema = z.object({
    login: z.string().min(3).max(32),
    email: z.email(),
    fullname: z.string().min(1),
    password: z.string().min(8),
})

export default authSchema;