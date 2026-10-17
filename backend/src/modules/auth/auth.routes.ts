import { Router, type Request, type Response } from "express";

import { registerUser } from "./auth.service.js";

import authSchema from "./auth.schema.js";

const authRouter = Router();

authRouter.post("/register", async (req: Request, res: Response) => {
    const result = authSchema.safeParse(req.body);

    if (!result.success) {
        res.status(400).json({
            message: "Данные не валидны"
        });

        return;
    }

    try {
        await registerUser(result.data);

        res.status(201).json({
            message: "Успешно"
        });
    } catch (e: unknown) {
        if (
            e !== null &&
            typeof e === "object" &&
            "code" in e &&
            e.code === "23505"
        ) {
            res.status(409).json({
                message: "Пользователь с таким email или логином уже есть"
            });

            return;
        }

        console.error(e);

        res.status(500).json({
            message: "Ошибка регистрации"
        })
    }
});

export default authRouter;