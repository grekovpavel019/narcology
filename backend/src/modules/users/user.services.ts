import { updateUserSchema, changePasswordSchema } from "./user.schema.js";
import pool from "../../lib/db.js";

import argon2 from "argon2";

import * as z from "zod";

type UpdateUserData = z.infer<typeof updateUserSchema>
type ChangePasswordData = z.infer<typeof changePasswordSchema>

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

export async function changePassword(
    userId: string,
    data: ChangePasswordData
) {
    const result = await pool.query(`
        SELECT password_hash
        FROM users
        WHERE id = $1
    `, [userId]);

    const user = result.rows[0];

    if (!user) {
        return "not_found" as const;
    }   

    const isPasswordValid = await argon2.verify(
        user.password_hash,
        data.currentPassword
    );

    if (!isPasswordValid) {
        return "invalid_password" as const;
    }

    const passwordHash = await argon2.hash(data.newPassword);

    await pool.query(`
        UPDATE users
        SET password_hash = $1
        WHERE id = $2
    `, [passwordHash, userId]);

    return 'updated' as const;
}