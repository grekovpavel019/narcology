import express, { type Express, type Request, type Response } from "express";
import cors from "cors";

import authRouter from "./modules/auth/auth.routes.js";

import "dotenv/config"

const app: Express = express();

app.use(cors({
    origin: process.env.CLIENT_URL
}))
app.use(express.json());

app.use("/api/auth", authRouter);

app.get("/api/health", (req: Request, res: Response) => {
    res.json({
        status: "Ok",
        timestamp: new Date().toISOString()
    });
})

export default app;