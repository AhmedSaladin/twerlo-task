import { Request, Response } from "express";
import morgan from "morgan";
import { environment } from "./environment";
import logger from "./logger";

morgan.token(
  "message",
  (req: Request, res: Response) => res.locals.errorMessage || ""
);

const getIpFormat = () =>
  environment.env === "production" ? ":remote-addr - " : "";

const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`;
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;

export const successLogHandler = morgan(successResponseFormat, {
  skip: (req: Request, res: Response) => res.statusCode >= 400,
  stream: { write: (message: string) => logger.info(message.trim()) },
});

export const errorLogHandler = morgan(errorResponseFormat, {
  skip: (req: Request, res: Response) => res.statusCode < 400,
  stream: { write: (message: string) => logger.error(message.trim()) },
});
