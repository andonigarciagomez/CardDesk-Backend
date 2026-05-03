import Favorite from "../models/favorite.js";

export const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.user.id });
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener favoritos" });
  }
};

export const addFavorite = async (req, res) => {
  try {
    const { id, name, image, source } = req.body;

    const newFav = new Favorite({
      userId: req.user.id,
      cardId: id,
      name,
      image,
      source: source
    });

    await newFav.save();

    res.status(201).json(newFav);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al guardar favorito" });
  }
};

export const deleteFavorite = async (req, res) => {
  try {
    await Favorite.deleteOne({
      userId: req.user.id,
      cardId: req.params.id,
    });

    res.json({ message: "Eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar" });
  }
};