import argon2 from "argon2";
import pool from "../../lib/db.js";

import { randomBytes, createHash } from "node:crypto";

import * as z from "zod";
import { registerSchema, loginSchema } from "./auth.schemas.js";

import { env } from "../../config/env.js";

type RegisterData = z.infer<typeof registerSchema>;

type LoginData = z.infer<typeof loginSchema>;

type PublicUser = {
    id: string;
    login: string;
    email: string;
    fullname: string;
}

const hashToken = (token: string) =>
    createHash("sha256").update(token).digest("hex");

// обработка регистрации
export async function registerUser(data: RegisterData): Promise<PublicUser> {

    const passwordHash = await argon2.hash(data.password);

    const result = await pool.query(`
        INSERT INTO users (login, email, fullname, password_hash)
        VALUES ($1, $2, $3, $4)
        RETURNING id, login, email, fullname
    `, [data.login, data.email, data.fullname, passwordHash]);


    return result.rows[0];
}

// обработка логина
export async function loginUser(data: LoginData): Promise<PublicUser | null> {
    const result = await pool.query(`
        SELECT id, login, email, fullname, password_hash
        FROM users
        WHERE login = $1
    `, [data.login]);


    const user = result.rows[0];

    if (!user) {
        return null;
    }

    const isPasswordValid = await argon2.verify(
        user.password_hash, data.password
    );

    if (!isPasswordValid) {
        return null;
    }

    return {
        id: user.id,
        login: user.login,
        email: user.email,
        fullname: user.fullname
    }
}

export async function createPasswordResetLink(email: string) {
    const userResult = await pool.query(
        `SELECT id FROM users WHERE email = $1`,
        [email.trim().toLowerCase()]
    );

    const user = userResult.rows[0];

    if (!user) {
        return null;
    }

    const token = randomBytes(32).toString("hex");
    const tokenHash = hashToken(token);

    await pool.query(
        `DELETE FROM password_reset_tokens WHERE user_id = $1`,
        [user.id]
    );

    await pool.query(
        `INSERT INTO password_reset_tokens
            (user_id, token_hash, expires_at)
         VALUES ($1, $2, NOW() + INTERVAL '15 minutes')`,
        [user.id, tokenHash]
    );

    const resetUrl = new URL("/reset-password", env.CLIENT_URL);
    resetUrl.searchParams.set("token", token);

    return resetUrl.toString();
}

export async function resetPassword(token: string, newPassword: string) {
    const tokenHash = hashToken(token);
    const client = await pool.connect();

    try {
        await client.query("BEGIN");

        const tokenResult = await client.query(
            `SELECT id, user_id
             FROM password_reset_tokens
             WHERE token_hash = $1
               AND expires_at > NOW()
               AND used_at IS NULL
             FOR UPDATE`,
            [tokenHash]
        );

        const resetToken = tokenResult.rows[0];

        if (!resetToken) {
            await client.query("ROLLBACK");
            return "invalid_token" as const;
        }

        const passwordHash = await argon2.hash(newPassword);

        await client.query(
            `UPDATE users SET password_hash = $1 WHERE id = $2`,
            [passwordHash, resetToken.user_id]
        );

        await client.query(
            `UPDATE password_reset_tokens
             SET used_at = NOW()
             WHERE id = $1`,
            [resetToken.id]
        );

        await client.query("COMMIT");

        return "updated" as const;
    } catch (error) {
        await client.query("ROLLBACK");
        throw error;
    } finally {
        client.release();
    }
}