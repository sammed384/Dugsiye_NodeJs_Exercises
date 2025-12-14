import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON body
app.use(express.json());

// ✅ Main Routes
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

// ✅ DB + Server Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ Database connection failed", err.message);
  });
