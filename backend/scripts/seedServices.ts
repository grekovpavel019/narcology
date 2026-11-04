import { staticServices } from './../../frontend/src/entities/Service/model/staticServices';
import pool from "../src/lib/db.ts"

const client = await pool.connect();

try {

    await client.query("BEGIN");

    for (let serv of staticServices) {
        const {
            description,
            price,
            category,
            format,
            audience,
            sub
        } = serv;


        await client.query(`
            INSERT INTO services (description, sub, price, category, audience, format)
            VALUES ($1, $2, $3, $4, $5, $6)
            `, [description, sub, price, category, audience, format]);
    }

    await client.query("COMMIT");
} catch (e) {
    console.error(e);

    await client.query("ROLLBACK");

    process.exitCode = 1;
} finally {
    client.release();
    await pool.end();
}
