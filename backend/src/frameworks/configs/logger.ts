import winston from "winston";
import { environment } from "./environment";

const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

export default winston.createLogger({
  level: environment.environment === "development" ? "debug" : "info",
  
  format: winston.format.combine(
    enumerateErrorFormat(),
    winston.format.colorize(),
    winston.format.splat(),
    winston.format.printf(({ level, message }) => `${level}: ${message}`)
  ),

  transports: [
    new winston.transports.Console({
      stderrLevels: ["error"],
    }),

    new winston.transports.File({
      filename: "./logs/error.log",
      level: "error",
    }),

    new winston.transports.File({ filename: "./logs/info.log", level: "info" }),
  ],
});

winston.exceptions.handle(
  new winston.transports.File({
    filename: "logs/uncaughtException.log",
    handleExceptions: true,
  })
);
