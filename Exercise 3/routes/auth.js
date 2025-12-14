import express from "express";
import { register, login } from "../controllers/authController.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Example protected route
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

export default router;
