import express, { Router } from "express";
import router from "./router";
import cors from 'cors';
import helmet from 'helmet';
import errorHandler from "../middlewares/error-handler";
const app = express();


app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(router(Router()));
app.use(errorHandler);

export default app;

