import { NextFunction, Request, Response } from "express";
import { Exception } from "../shared/exceptions/Exception";

const error = async (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response> => {
  if (error instanceof Exception) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  return response.status(500).json({ error: error.message });
};

export { error };
