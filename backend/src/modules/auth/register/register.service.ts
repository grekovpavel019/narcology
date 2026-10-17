import argon2 from "argon2";
import pool from "../../../lib/db.js";

import * as z from "zod";
import registerScema from "./register.schema.js";

type RegisterData = z.infer<typeof registerScema>;

export async function registerUser(data: RegisterData): Promise<void> {

    const passwordHash = await argon2.hash(data.password);

    await pool.query(`
        INSERT INTO users (login, email, fullname, password_hash)
        VALUES ($1, $2, $3, $4)
    `, [data.login, data.email, data.fullname, passwordHash]);
 
}