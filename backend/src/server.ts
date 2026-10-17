import app from "./app.js";

import { env } from "./config/env.js";

const PORT = Number(env.PORT);

app.listen(PORT, () => {
    console.log("Сервер успешно запущен на порту: ", PORT);
})