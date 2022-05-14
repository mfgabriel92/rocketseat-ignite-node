import { CategoryRepository } from "../../repositories";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const repository = CategoryRepository.getInstance();
const useCase = new ListCategoriesUseCase(repository);
const controller = new ListCategoriesController(useCase);

export { controller };
