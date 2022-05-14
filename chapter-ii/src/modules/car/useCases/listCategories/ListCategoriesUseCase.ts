import { Category } from "../../models";
import { ICategoryRepository } from "../../repositories";

class ListCategoriesUseCase {
  constructor(private repository: ICategoryRepository) {}

  execute = (): Category[] => {
    return this.repository.findAll();
  };
}

export { ListCategoriesUseCase };
