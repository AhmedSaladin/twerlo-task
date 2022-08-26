import { NextFunction, Request, Response } from "express";
import AppError from "../../common/app-error";
import Status from "../../common/status-code";
import { environment } from "../configs/environment";
import logger from "../configs/logger";

export default function ErrorHandler(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const message = err.message;
  const statusCode = err.statusCode || Status.INTERNAL_SERVER_ERROR;

  if (environment.env === "development") logger.error(err);
  
  res.locals.errorMessage = message;

  res.status(statusCode).json({ error: message });
}

const exitHandler = () => {
  logger.info("Server closed");
  process.exit(1);
};

const unexpectedErrorHandler = (error: Error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  process.exit(1);
});
