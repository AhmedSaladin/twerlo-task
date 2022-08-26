import express, { Router } from "express";
import router from "./router";
import cors from "cors";
import helmet from "helmet";
import ErrorHandler from "../middlewares/error-handler";
import { errorLogHandler, successLogHandler } from "../configs/morgan";

const app = express();

app.use(successLogHandler);
app.use(errorLogHandler);
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(router(Router()));
app.use(ErrorHandler);

export default app;