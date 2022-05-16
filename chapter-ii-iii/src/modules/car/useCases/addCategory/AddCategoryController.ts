import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddCategoryUseCase } from "./AddCategoryUseCase";

class AddCategoryController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const { name, description } = request.body;
    const addCategory = container.resolve(AddCategoryUseCase);
    const category = await addCategory.execute({ name, description });
    return response.status(201).json(category);
  };
}

export { AddCategoryController };
