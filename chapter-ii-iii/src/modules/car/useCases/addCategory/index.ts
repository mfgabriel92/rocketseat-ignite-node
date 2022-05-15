import { CategoryRepository } from "../../repositories";
import { AddCategoryController } from "./AddCategoryController";
import { AddCategoryUseCase } from "./AddCategoryUseCase";

export default (): AddCategoryController => {
  const repository = new CategoryRepository();
  const useCase = new AddCategoryUseCase(repository);
  const controller = new AddCategoryController(useCase);

  return controller;
};
