import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

export const privateApiRouter = express.Router();

privateApiRouter.use(authMiddleware);
