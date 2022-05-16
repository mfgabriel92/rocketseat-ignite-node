import { inject, injectable } from "tsyringe";
import { Exception } from "../../../../shared/exceptions/Exception";
import { ICategory } from "../../entities";
import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories";

@injectable()
class AddCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private repository: ICategoryRepository
  ) {}

  execute = async (category: ICategory): Promise<Category> => {
    const { name } = category;
    const categoryAlreadyExists = await this.repository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Exception(`The category "${category.name}" already exists`);
    }

    return this.repository.addCategory(category);
  };
}

export { AddCategoryUseCase };
