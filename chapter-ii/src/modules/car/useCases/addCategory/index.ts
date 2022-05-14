import { CategoryRepository } from "../../repositories";
import { AddCategoryController } from "./AddCategoryController";
import { AddCategoryUseCase } from "./AddCategoryUseCase";

const repository = CategoryRepository.getInstance();
const useCase = new AddCategoryUseCase(repository);
const controller = new AddCategoryController(useCase);

export { controller };
