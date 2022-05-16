import { inject, injectable } from "tsyringe";
import { Category } from "../../entities";
import { ICategoryRepository } from "../../repositories";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoryRepository")
    private repository: ICategoryRepository
  ) {}

  execute = async (): Promise<Category[]> => {
    return this.repository.findAll();
  };
}

export { ListCategoriesUseCase };
