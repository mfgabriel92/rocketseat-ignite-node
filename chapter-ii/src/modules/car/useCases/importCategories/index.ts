import { CategoryRepository } from "../../repositories";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

const repository = CategoryRepository.getInstance();
const useCase = new ImportCategoriesUseCase(repository);
const controller = new ImportCategoriesController(useCase);

export { controller };
