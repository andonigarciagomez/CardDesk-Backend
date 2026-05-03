import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

// 🔥 conectar DB antes de levantar servidor
connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});