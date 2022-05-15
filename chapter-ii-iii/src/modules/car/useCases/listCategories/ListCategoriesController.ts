import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategories: ListCategoriesUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const categories = await this.listCategories.execute();
    return response.status(200).json(categories);
  };
}

export { ListCategoriesController };
