import { Pool } from "pg"
import "dotenv/config"

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});

pool.on("connect", (client) => {
    console.log("Соединение с PostgreSQL установлено");
});

pool.on("error", (error) => {
    console.error("Ошибка пула:", error.message);
});

export default pool;