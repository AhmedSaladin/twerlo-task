import dotenv from "dotenv";

dotenv.config();

export const environment = {
  env: process.env.ENV,
  port: process.env.PORT,
};
