import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const listCategories = container.resolve(ListCategoriesUseCase);
    const categories = await listCategories.execute();
    return response.status(200).json(categories);
  };
}

export { ListCategoriesController };
