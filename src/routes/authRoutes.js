import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login); // 👈 ESTA ES LA CLAVE

export default router;