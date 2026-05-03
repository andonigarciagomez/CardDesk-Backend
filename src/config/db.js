import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/carddesk");
    console.log("✅ MongoDB conectado");
  } catch (error) {
    console.error("❌ Error conectando DB:", error.message);
    process.exit(1);
  }
};