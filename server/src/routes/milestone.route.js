import express from "express";
const router = express.Router();
import {milestoneController} from "../controllers/index.js";

router.get("/", milestoneController.getAll);
router.post("/", milestoneController.create);
router.post("/:id/tips", milestoneController.addTips);

export default router;

