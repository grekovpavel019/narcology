import { Router, type Request, type Response } from "express";
import { requireAuth } from "../../middleware/requireAuth.middleware.js";
import { changePassword, getCurrentUser, updateUser } from "./user.services.js";
import { changePasswordSchema, updateUserSchema } from "./user.schema.js";

const userRouter = Router();

userRouter.get("/me", requireAuth, async (req: Request, res: Response) => {
    try {
        const user = await getCurrentUser(req.session.userId!);
        
        if (!user) {
            return res.status(404).json({
                message: "Пользователь не найден"
            })
        }
        return res.status(200).json({
            user
        });

    } catch (e) {
        console.error(e);

        return res.status(500).json({
            message: "Ошибка получения пользователя"
        });
    }
});

userRouter.patch("/me", requireAuth, async (req: Request, res: Response) => {
    const result = updateUserSchema.safeParse(req.body);
    
    if (!result.success) {

        return res.status(400).json({
            message: "Данные не валидны"
        });

    }

    try {
        const user = await updateUser(req.session.userId!, result.data);

        if (!user) {
            return res.status(404).json({
                message: "Пользователь не найден"
            });
        }

        return res.status(200).json({
            message: "Успешно обновлено",
            user
        });
    } catch(e) {
         if (
            typeof e === "object" &&
            e !== null &&
            "code" in e &&
            e.code === "23505"
        ) {
            return res.status(409).json({
                message: "Этот email уже используется"
            });
        }

        console.error(e);

        return res.status(500).json({
            message: "Ошибка обновления пользователя"
        });
    }
})

userRouter.patch("/me/password", requireAuth, async (req: Request, res: Response) => {
    const result = changePasswordSchema.safeParse(req.body);

    if (!result.success) {

        return res.status(400).json({
            message: "Некорректные данные для смены пароля"
        });
    }

    try {
        const outcome = await changePassword(
            req.session.userId!,
            result.data
        );

        if (outcome === "not_found") {

            return res.status(404).json({
                message: "Пользователь не найден"
            });
        }

        if (outcome === "invalid_password") {

            return res.status(400).json({
                message: "Текущий пароль указан неверно"
            });
        }

        return res.status(200).json({

            message: "Пароль успешно изменён"
        });
    } catch (e) {
        console.error(e);

        return res.status(500).json({
            message: "Ошибка смены пароля"
        });
    }
});

export default userRouter;