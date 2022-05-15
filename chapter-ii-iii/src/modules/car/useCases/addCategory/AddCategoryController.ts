import { Request, Response } from "express";
import { AddCategoryUseCase } from "./AddCategoryUseCase";

class AddCategoryController {
  constructor(private addCategory: AddCategoryUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const { name, description } = request.body;
    const category = await this.addCategory.execute({ name, description });

    return response.status(201).send(category);
  };
}

export { AddCategoryController };
