import express from "express";
import {
  getFavorites,
  addFavorite,
  deleteFavorite,
} from "../controllers/favoriteController.js";

import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getFavorites);
router.post("/", verifyToken, addFavorite);
router.delete("/:cardId", verifyToken, deleteFavorite);

export default router;