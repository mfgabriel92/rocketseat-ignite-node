import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategories: ListCategoriesUseCase) {}

  handle = (request: Request, response: Response): void => {
    const categories = this.listCategories.execute();
    response.status(200).json(categories);
  };
}

export { ListCategoriesController };
