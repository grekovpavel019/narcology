import argon2 from "argon2";
import pool from "../../lib/db.js";

import * as z from "zod";
import { registerSchema, loginSchema } from "./auth.schemas.js";

type RegisterData = z.infer<typeof registerSchema>;

type LoginData = z.infer<typeof loginSchema>;

type PublicUser = {
    id: string;
    login: string;
    email: string;
    fullname: string;
}

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