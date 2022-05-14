import { Request, Response } from "express";
import { AddCategoryUseCase } from "./AddCategoryUseCase";

class AddCategoryController {
  constructor(private addCategory: AddCategoryUseCase) {}

  handle = (request: Request, response: Response): Response => {
    const { name, description } = request.body;
    this.addCategory.execute({ name, description });
    return response.status(201).send();
  };
}

export { AddCategoryController };
