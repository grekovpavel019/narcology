import { Router, type Request, type Response } from "express";

import { registerSchema, loginSchema } from "./auth.schemas.js";
import { registerUser, loginUser } from "./auth.services.js";

import pool from "../../lib/db.js";

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
        
    } catch (e) {
        console.error(e);

        res.status(500).json({
            message: "Ошибка авторизации"
        })
    }
});

authRouter.get("/me", async (req: Request, res: Response) => {
    if (!req.session.userId) {
        return res.status(401).json({
            message: "Не авторизован"
        });
    }

    try {
        const result = await pool.query(`
            SELECT id, login, email, fullname
            FROM users
            WHERE id = $1
        `, [req.session.userId]);

        if (result.rows.length === 0) {
            return res.status(401).json({
                message: "Пользователь не найден"
            });
        }

        return res.status(200).json({
            user: result.rows[0]
        });
    } catch (e) {
        console.error(e);

        return res.status(500).json({
            message: "Ошибка получения пользователя"
        });
    }
});

export default authRouter;