import { Router, type Request, type Response } from "express";
import authSchema from "./auth.schema.js";

const authRouter = Router();

authRouter.post("/register", (req: Request, res: Response) => {
    const result = authSchema.safeParse(req.body);

    if (!result.success) {
        res.status(400).json({
            message: "Данные не валидны"
        });

        return;
    }

    res.status(200).json({
        message: "Успешно"
    });
});

export default authRouter;