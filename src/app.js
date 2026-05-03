import express from "express";
import cors from "cors";

import favoriteRoutes from "./routes/favoriteRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// ✅ CORS BIEN CONFIGURADO
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// ✅ RUTAS
app.use("/api/favorites", favoriteRoutes);
app.use("/api/auth", authRoutes);

// ❌ NUNCA pongas app.options("*") → eso te rompía todo

export default app;