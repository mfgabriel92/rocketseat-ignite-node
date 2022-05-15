import { CategoryRepository } from "../../repositories";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

export default (): ImportCategoriesController => {
  const repository = new CategoryRepository();
  const useCase = new ImportCategoriesUseCase(repository);
  const controller = new ImportCategoriesController(useCase);

  return controller;
};
