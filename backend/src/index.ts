import express, { type Express, type Request, type Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
});

app.listen(3000, () => {
    console.log("Сервер запущен");
});