import { ICategory } from "../../entities";
import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories";

class AddCategoryUseCase {
  constructor(private repository: ICategoryRepository) {}

  execute = async (category: ICategory): Promise<Category> => {
    const { name } = category;
    const categoryAlreadyExists = await this.repository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error(`The category "${category.name}" already exists`);
    }

    await this.repository.addCategory(category);
    return category;
  };
}

export { AddCategoryUseCase };
