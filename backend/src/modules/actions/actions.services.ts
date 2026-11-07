import { LogActionSchema, type LogActionParams } from "./actions.schemas.js";
import pool from "../../lib/db.js";

async function logAction(params: LogActionParams): Promise<void> {

    const result = await LogActionSchema.safeParse(params);

    if (!result.success) {
        throw result.error;
    }

    const { userId, action, target, ip } = result.data;

    await pool.query(`
        INSERT INTO actions_log (user_id, action, target, ip)
        VALUES ($1, $2, $3, $4)
    `, [userId, action, target, ip]);
}

export async function tryLogAction(params: LogActionParams): Promise<void> {
    try {
        await logAction(params);
    } catch (e) {
        console.error(e)
    }
}

export default logAction;