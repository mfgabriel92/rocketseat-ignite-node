import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddUserUseCase } from "./AddUserUseCase";

class AddUserController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const addUser = container.resolve(AddUserUseCase);
    const user = await addUser.execute(request.body);
    return response.status(201).send(user);
  };
}

export { AddUserController };
