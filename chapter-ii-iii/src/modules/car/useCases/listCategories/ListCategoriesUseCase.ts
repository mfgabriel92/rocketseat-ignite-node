import { Category } from "../../entities";
import { ICategoryRepository } from "../../repositories";

class ListCategoriesUseCase {
  constructor(private repository: ICategoryRepository) {}

  execute = async (): Promise<Category[]> => {
    return this.repository.findAll();
  };
}

export { ListCategoriesUseCase };
