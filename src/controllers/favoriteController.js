import { pool } from "../config/db.js";

// GET FAVORITOS
export const getFavorites = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM favorites WHERE user_id = $1",
      [req.user.id]
    );

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ADD FAVORITO
export const addFavorite = async (req, res) => {
  try {
    const { card_id, name, image_url } = req.body;

    const result = await pool.query(
      `INSERT INTO favorites (user_id, card_id, name, image_url)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [req.user.id, card_id, name, image_url]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE FAVORITO
export const deleteFavorite = async (req, res) => {
  try {
    const { cardId } = req.params;

    await pool.query(
      "DELETE FROM favorites WHERE user_id=$1 AND card_id=$2",
      [req.user.id, cardId]
    );

    res.json({ message: "Eliminado de favoritos" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};