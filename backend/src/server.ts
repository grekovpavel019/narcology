import "dotenv/config";
import app from "./app.js";

const PORT = Number(process.env.PORT);

app.listen(PORT, () => {
    console.log("Сервер успешно запущен на порту: ", PORT);
})