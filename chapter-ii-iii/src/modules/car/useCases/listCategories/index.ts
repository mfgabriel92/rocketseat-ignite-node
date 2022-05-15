import { CategoryRepository } from "../../repositories";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export default (): ListCategoriesController => {
  const repository = new CategoryRepository();
  const useCase = new ListCategoriesUseCase(repository);
  const controller = new ListCategoriesController(useCase);

  return controller;
};
