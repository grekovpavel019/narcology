import argon2 from "argon2";
import pool from "../../../lib/db.js";

import * as z from "zod";
import loginSchema from "./login.schema.js"

type LoginData = z.infer<typeof loginSchema>;

export async function loginUser(data: LoginData) {
    const result = await pool.query(`
        SELECT id, login, email, fullname, password_hash
        FROM users
        WHERE login = $1
    `, [data.login]);

    if (result.rows.length === 1)
}