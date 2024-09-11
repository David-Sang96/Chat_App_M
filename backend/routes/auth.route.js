import express from "express";
import { LogIn, LogOut, signUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/log-in", LogIn);
router.post("/log-out", LogOut);

export default router;
