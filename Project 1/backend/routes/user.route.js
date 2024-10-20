import express from "express";
import { login, signup, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";


const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/update/profile").post(isAuthenticated,updateProfile); 

export default router;