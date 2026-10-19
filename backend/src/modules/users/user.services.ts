import pool from "../../lib/db.js";

export async function getCurrentUser(userId: string) {
    const result = await pool.query(`
        SELECT id, login, email, fullname
        FROM users
        WHERE id = $1
    `, [userId]);

    return result.rows[0] ?? null;
}