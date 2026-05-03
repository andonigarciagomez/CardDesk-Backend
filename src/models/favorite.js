import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  cardId: {
    type: String,
    required: true,
  },

  name: String,
  image: String,

  // 🔥 NECESARIO PARA FILTROS
  source: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Favorite", favoriteSchema);