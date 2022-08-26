export default class AppError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
    Error.call(this);
    Error.captureStackTrace(this);
  }
}
