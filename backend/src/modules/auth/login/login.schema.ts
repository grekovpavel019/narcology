import * as z from "zod";

const loginSchema = z.object({
    login: z.string(),
    password: z.string()
})

export default loginSchema;