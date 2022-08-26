import { Request, Response, NextFunction } from "express";

export default (func: Function) => {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const [data, statusCode] = await func(req);
      res.status(statusCode).json(data);
    } catch (error: any) {
      next(error);
    }
  };
};
