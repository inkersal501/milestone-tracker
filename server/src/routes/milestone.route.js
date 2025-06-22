import express from "express";
const router = express.Router();
import {milestoneController} from "../controllers/index.js";

router.get("/:type", milestoneController.getAll);
router.post("/", milestoneController.create); 
router.post("/:id/tips", milestoneController.addTips);
router.get("/:id/tips", milestoneController.getTips);

export default router;

