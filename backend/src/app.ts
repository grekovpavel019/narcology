import express, { type Express, type Request, type Response } from "express";

import pool from "./lib/db.js";

const app: Express = express();

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
    res.send("Hello world");

    try {
        const result = await pool.query("SELECT NOW()");
        console.log(result.rows);
    } catch (error) {
        console.error("Database connection failed:", error);
    }
});

app.get("/api/health", (req: Request, res: Response) => {
    res.json({
        status: "Ok",
        timestamp: "..."
    });
})

export default app;