import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import session from "express-session";
import pool from "./lib/db.js";

import authRouter from "./modules/auth/auth.routes.js";

import connectPgSimple from "connect-pg-simple";

import { env } from "./config/env.js";

const app: Express = express();

const PGStore = connectPgSimple(session);

// использование ресурсов между разными источниками
app.use(cors({
    origin: env.CLIENT_URL,
    credentials: true
}))

// поддержка json
app.use(express.json());

// сессия, на основе куки
app.use(
    session({
        secret: env.SESSION_SECRET,
        resave: false, // не перезаписываем сессию повторно при каждом запросе, если она не менялась
        saveUninitialized: false, // не сохраняем пустые сессии
        store: new PGStore({
            pool,
            createTableIfMissing: true // если таблицы нет: создать
        }),
        cookie: {
            httpOnly: true,
            sameSite: "lax", // подделка куки
        }
    })
)

app.use("/api/auth", authRouter);

app.get("/api/health", (req: Request, res: Response) => {
    res.json({
        status: "Ok",
        timestamp: new Date().toISOString()
    });
})

export default app;