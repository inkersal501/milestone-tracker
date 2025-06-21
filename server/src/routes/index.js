import express from "express";
import userRoutes from "./user.route.js";
import milestoneRoutes from "./milestone.route.js";
import { authMiddleware } from "../middlewares/index.js";
const router = express.Router();

router.use("/api/users", userRoutes);
router.use(authMiddleware);
router.use("/api/milestones", milestoneRoutes);

export default router;
