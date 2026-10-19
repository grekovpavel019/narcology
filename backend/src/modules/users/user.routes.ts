import { Router, type Request, type Response } from "express";
import { requireAuth } from "../../middleware/requireAuth.middleware.js";
import { getCurrentUser, updateUser } from "./user.services.js";
import { updateUserSchema } from "./user.schema.js";

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
        console.error(e);

        return res.status(500).json({
            message: "Ошибка обновления пользователя"
        });
    }
})

export default userRouter;