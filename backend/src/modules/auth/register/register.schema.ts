import * as z from "zod";

const registerSchema = z.object({
    login: z.string().min(3).max(32).regex(/^[a-zA-Z0-9]+$/),
    email: z.email(),
    fullname: z.string().min(1),
    password: z.string().min(8),
})

export default registerSchema;