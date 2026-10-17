import argon2 from "argon2";
import pool from "../../../lib/db.js";

import * as z from "zod";
import loginSchema from "./login.schema.js"

type LoginData = z.infer<typeof loginSchema>;

type PublicUser = {
    id: string;
    login: string;
    email: string;
    fullname: string;
}

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