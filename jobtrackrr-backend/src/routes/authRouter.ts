import { Router } from "express";
import { login, signup } from "../controllers/authController";
import { getUser } from "../controllers/userController";
import { authMiddleware } from "../middleware/authMiddleware";

export const AuthRouter = Router();

AuthRouter.route("/login").post(login);
AuthRouter.route("/signup").post(signup);
AuthRouter.route("/user").get(authMiddleware, getUser);
