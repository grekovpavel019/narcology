import { Router, type Request, type Response } from "express";

import { registerUser } from "./register/register.service.js";
import { loginUser } from "./login/login.service.js";

import registerSchema from "./register/register.schema.js";
import loginSchema from "./login/login.schema.js";

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
        await registerUser(result.data);

        res.status(201).json({
            message: "Успешно",
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

        req.session.regenerate((err) => {
            if (err) {
                console.error(err);

                res.status(500).json({
                    message: "Ошибка создания сессии"
                });
                return;
            }

            req.session.userId = user.id;

            req.session.save((err) => {
                if (err) {
                    console.error(err);

                    res.status(500).json({
                        message: "Ошибка создания сессии"
                    });

                    return;
                }

                res.status(200).json({
                    message: "Успешно"
                })
            })
        });

        res.status(200).json({
            message: "Успешно",
            user
        });
        
    } catch (e) {
        console.error(e);

        res.status(500).json({
            message: "Ошибка авторизации"
        })
    }
});

export default authRouter;