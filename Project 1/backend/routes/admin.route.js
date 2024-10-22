import express from "express";
import { adminLogin, adminSignup } from "../controllers/admin.controller.js";

const router = express.Router()

router.route("/login").post(adminLogin)
router.route("/signup").post(adminSignup)

export default router
