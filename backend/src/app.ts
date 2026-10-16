import express, { type Express, type Request, type Response } from "express";

const app: Express = express();

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
    res.send("Hello world");
});

app.get("/api/health", (req: Request, res: Response) => {
    res.json({
        status: "Ok",
        timestamp: new Date().toISOString()
    });
})

export default app;