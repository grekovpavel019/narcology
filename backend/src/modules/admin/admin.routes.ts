import { Router, type Request, type Response } from "express";

import { requireAdmin } from "../../middleware/requireAdmin.middleware.js";
import { requireAuth } from "../../middleware/requireAuth.middleware.js";

const adminRouter = Router();
adminRouter.use(requireAuth, requireAdmin);

adminRouter.get("/me", async (req: Request, res: Response) => {
    res.status(200).json({
        message: "Доступ администратора"
    });
});

export default adminRouter;