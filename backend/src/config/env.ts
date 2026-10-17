import "dotenv/config";
import * as z from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().int().min(1).max(65535),

    NODE_ENV: z.enum([
        "development",
        "production",
        "test"
    ]),

    DB_HOST: z.string().min(1),
    DB_PORT: z.coerce.number().int().min(1).max(65535),
    DB_NAME: z.string().min(1),
    DB_USER: z.string().min(1),
    DB_PASS: z.string().min(1),

    CLIENT_URL: z.url(),

    SESSION_SECRET: z.string().min(32)
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
    console.error("Ошибка конфигурации окружения: ", result.error.format());
    process.exit(1);
}

export const env = result.data;