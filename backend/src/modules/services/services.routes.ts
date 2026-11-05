import { Router, type Request, type Response } from "express";
import { requireAdmin } from "../../middleware/requireAdmin.middleware.js";
import { requireAuth } from "../../middleware/requireAuth.middleware.js";

import pool from "../../lib/db.js";

import { serviceIdSchema, serviceSchema } from "./services.schemas.js";

const servicesRouter = Router();

servicesRouter.get("/", async (req: Request, res: Response) => {
    
    try {
        const result = await pool.query(`
            SELECT id, description, sub, price, category, audience, format 
            FROM services
            ORDER BY id
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
});

servicesRouter.patch("/:id", requireAuth, requireAdmin, async (req: Request, res: Response) => {
    const result = serviceSchema.safeParse(req.body);
    const idResult = serviceIdSchema.safeParse(req.params.id);

    if (!result.success) {
        return res.status(400).json({
            message: "Данные не валидны"
        });
    }

    if (!idResult.success) {
        return res.status(400).json({
            message: "Бэд реквест"
        });
    }

    try {
        const { description, price, category, audience, format } = result.data;

        const service = await pool.query(`
            UPDATE services
            SET description = $2, sub = $3, price = $4, category = $5, audience = $6, format = $7
            WHERE ID = $1
            RETURNING id, description, sub, price, category, audience, format
        `, [idResult.data, description, result.data.sub ?? null, price, category, audience, format])
        
        if (service.rows.length === 0) {
            return res.status(404).json({
                message: "Не удалось обновить"
            });
        }

        res.status(200).json({
            service: service.rows[0]
        })
    } catch (e) {
        console.error(e);

        res.status(500).json({
            message: "Ошибка"
        });
    }
    
});

servicesRouter.delete("/:id", requireAuth, requireAdmin, async (req: Request, res: Response) => {
    const idResult = serviceIdSchema.safeParse(req.params.id);

    if (!idResult.success) {
        return res.status(400).json({
            message: "Бэд реквест"
        });
    }

    try {

        const serviceId = await pool.query(`
            DELETE FROM services WHERE id = $1    
            RETURNING id
        `, [idResult.data]);

        if (serviceId.rows.length === 0) {
            return res.status(404).json({
                message: "Не удалось удалить"
            });
        }

        res.status(200).json({
            serviceId: serviceId.rows[0]
        });

    } catch (e) {
        console.error(e);

        res.status(500).json({
            message: "Ошибка"
        });
    }
});

export default servicesRouter;