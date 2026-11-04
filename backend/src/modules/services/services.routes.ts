import { Router, type Request, type Response } from "express";
import { requireAdmin } from "../../middleware/requireAdmin.middleware.js";
import { requireAuth } from "../../middleware/requireAuth.middleware.js";

import pool from "../../lib/db.js";

import { serviceSchema } from "./services.schemas.js";
import * as z from "zod";

const servicesRouter = Router();

type Service = z.infer<typeof serviceSchema>;

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



export default servicesRouter;