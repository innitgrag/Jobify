import express from "express";
import { logout , login , register, getUser } from '../controller/userController.js';
import { isAuthorised } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthorised, logout);
router.get("/getuser",isAuthorised,getUser);


export default router;
