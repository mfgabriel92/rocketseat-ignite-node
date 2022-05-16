/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/account/repositories";
import { Exception } from "../shared/exceptions/Exception";

interface IPayload {
  sub: string;
}

export const ensureAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const access_token = request.headers.authorization;

  if (!access_token) {
    throw new Exception("Invalid token", 401);
  }

  const [, token] = access_token.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      `${process.env.JWT_SECRET}`
    ) as IPayload;
    const userRepository = new UserRepository();
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new Exception("Invalid user", 404);
    }

    request.user = { user_id };

    next();
  } catch (error) {
    throw new Exception("Invalid token", 401);
  }
};
