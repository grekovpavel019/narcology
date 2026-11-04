import { Router, type Request, type Response } from "express";
import { requireAdmin } from "../../middleware/requireAdmin.middleware.js";
import { requireAuth } from "../../middleware/requireAuth.middleware.js";

import pool from "../../lib/db.js";

import { serviceSchema } from "./services.schemas.js";

const servicesRouter = Router();

servicesRouter.get("/", async (req: Request, res: Response) => {
    
    try {
        const result = await pool.query(`
            SELECT id, description, sub, price, category, audience, format FROM services
        `);

        const services = result.rows;
    
        res.status(200).json({
            services
        })
    } catch (e) {
        console.error(e);

        res.status(500).json({
            message: "Ошибка"
        })
    }
});

servicesRouter.post("/", requireAuth, requireAdmin, async (req: Request, res: Response) => {
    const result = serviceSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: "Данные не валидны"
        });
    }

    try {
        const { description, price, category, audience, format } = result.data;


        const service = await pool.query(`
            INSERT INTO services (description, sub, price, category, audience, format)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id, description, sub, price, category, audience, format
        `, [description, result.data.sub ?? null, price, category, audience, format]);

        res.status(201).json({
            service: service.rows[0]
        })

    } catch (e) {
        console.error(e);

        res.status(500).json({
            message: "Ошибка"
        });
    }
})

export default servicesRouter;