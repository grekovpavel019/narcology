import { updateUserSchema } from "./user.schema.js";
import pool from "../../lib/db.js";

import * as z from "zod";

type UpdateUserData = z.infer<typeof updateUserSchema>

export async function getCurrentUser(userId: string) {
    const result = await pool.query(`
        SELECT id, login, email, fullname
        FROM users
        WHERE id = $1
    `, [userId]);

    return result.rows[0] ?? null;
}

export async function updateUser(userId: string, data: UpdateUserData) {
    const result = await pool.query(`
        UPDATE users
        SET fullname = $1,
            email = $2
        WHERE id = $3
        RETURNING id, login, email, fullname
    `, [data.fullname, data.email, userId]);

    return result.rows[0] ?? null;
}