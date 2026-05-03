import express from "express";
import {
  getFavorites,
  addFavorite,
  deleteFavorite,
} from "../controllers/favoriteController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getFavorites);
router.post("/", authMiddleware, addFavorite);
router.delete("/:id", authMiddleware, deleteFavorite);

export default router;