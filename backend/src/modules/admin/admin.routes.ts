import { Router, type Request, type Response } from "express";

import { requireAdmin } from "../../middleware/requireAdmin.middleware.js";
import { requireAuth } from "../../middleware/requireAuth.middleware.js";

import * as z from "zod";
import { statisticsSchema } from "./admin.schemas.js";

import pool from "../../lib/db.js";

const adminRouter = Router();
adminRouter.use(requireAuth, requireAdmin);

adminRouter.get("/me", async (req: Request, res: Response) => {
    res.status(200).json({
        message: "Доступ администратора"
    });
});

adminRouter.get("/statistics", async (req: Request, res: Response) => {
    const result = statisticsSchema.safeParse(req.query);

    if (!result.success) {
        return res.status(400).send({
            message: "Данные не валидны"
        })
    }

    const orderBy = result.data.order === "asc" ? "ASC" : "DESC";

    const query = await pool.query(`
        SELECT
            DATE_TRUNC($1, created_at) AS period,
            COUNT(*) AS quantity
        FROM actions_log
        WHERE ($2 = 'all' OR action = $2)
        GROUP BY DATE_TRUNC($1, created_at)
        ORDER BY period ${orderBy};
    `, [result.data.groupBy, result.data.action])

    res.status(200).json({
        data: query.rows
    })
});

export default adminRouter;