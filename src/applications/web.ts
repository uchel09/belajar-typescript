import express from "express";
import { publicRouter } from "../routers/publicApi";
import { errorMiddleware } from "../middlewares/ErrorMiddleware";
import { privateApiRouter } from "../routers/privateApi";

export const app = express();
app.use(express.json());
app.use(publicRouter);
app.use(privateApiRouter);
app.use(errorMiddleware);
