import express, { type Express, type Request, type Response } from "express";
import authRouter from "./modules/auth/auth.routes.js";

const app: Express = express();

app.use(express.json());

app.use("/api/auth", authRouter);

app.get("/api/health", (req: Request, res: Response) => {
    res.json({
        status: "Ok",
        timestamp: new Date().toISOString()
    });
})

export default app;