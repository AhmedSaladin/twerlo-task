import { Request, Response } from "express";
import AppError from "../../common/app-error";
import Status from "../../common/status-code";


export default (err: AppError, req: Request, res: Response) => {
  const { message } = err;
  const statusCode = err.statusCode || Status.INTERNAL_SERVER_ERROR;
  
  res.status(statusCode).json({ error: message });
};

const exitHandler = () => {
  console.info("Server closed");
  process.exit(1);
};

const unexpectedErrorHandler = (error: Error) => {
  console.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  console.info("SIGTERM received");
  process.exit(1);
});
