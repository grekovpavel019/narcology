import type { Request, Response, NextFunction } from "express";

import pool from "../lib/db.js";

export async function requireAdmin(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    const userId = req.session.userId;

    if (!userId) {
        res.status(401).json({
            message: "Не авторизован"
        });

        return;
    }

    try {
        const userRole = await pool.query(`
            SELECT role FROM users WHERE id = $1
        `, [userId]);

        if (userRole.rows.length === 0) {
            res.status(401).json({
                message: "Cессия недействительна"
            });

            return;
        }

        if (userRole.rows[0].role === "admin") {
            next();
            return;
        }

        res.status(403).json({
            message: "Запрещено"
        })
    } catch (e) {
        next(e);
    }
    
}