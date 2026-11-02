import type { Request, Response, NextFunction } from "express";
import pool from "../lib/db.js";

export function requireAuth(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    if (!req.session.userId) {
        res.status(401).json({
            message: "Не авторизован"
        });

        return;
    }

    next();
}