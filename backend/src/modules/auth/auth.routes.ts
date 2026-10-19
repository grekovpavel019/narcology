import { Router, type Request, type Response } from "express";

import { registerSchema, loginSchema } from "./auth.schemas.js";
import { registerUser, loginUser } from "./auth.services.js";

import pool from "../../lib/db.js";
import { requireAuth } from "../../middleware/requireAuth.middleware.js";

import { createSession } from "../../middleware/createSession.middleware.js";
import { getCurrentUser } from "../users/user.services.js";

const authRouter = Router();

authRouter.post("/register", async (req: Request, res: Response) => {
    const result = registerSchema.safeParse(req.body);

    if (!result.success) {
        res.status(400).json({
            message: "Данные не валидны"
        });

        return;
    }

    try {
        const user = await registerUser(result.data);

        await createSession(req, user.id)

        return res.status(201).json({
            message: "Успешно"
        });

    } catch (e) {
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

authRouter.post("/login", async (req: Request, res: Response) => {
    const result = loginSchema.safeParse(req.body);

    if (!result.success) {
        res.status(400).json({
            message: "Данные не валидны"
        });

        return;
    }

    try {
        const user = await loginUser(result.data);

        if (!user) {
            res.status(401).json({
                message: "Неверный логин или пароль"
            });

            return;
        }

        await createSession(req, user.id);

        return res.status(200).json({
            message: "Успешно"
        });
        
    } catch (e) {
        console.error(e);

        res.status(500).json({
            message: "Ошибка авторизации"
        })
    }
});


authRouter.post("/logout", (req: Request, res: Response) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);

            return res.status(500).json({
                message: "Ошибка выхода из аккаунта"
            })
        }

        res.clearCookie("connect.sid", {
            path: "/"
        });
    
        return res.status(200).json({
            message: "Выход выполенен успешно"
        })
    });

});

export default authRouter;