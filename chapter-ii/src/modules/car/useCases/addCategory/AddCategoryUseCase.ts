import { ICategory } from "../../models";
import { Category } from "../../models/Category";
import { ICategoryRepository } from "../../repositories";

class AddCategoryUseCase {
  constructor(private repository: ICategoryRepository) {}

  execute = (category: ICategory): Category => {
    const categoryAlreadyExists = this.repository.findByName(category.name);

    if (categoryAlreadyExists) {
      throw new Error(`The category "${category.name}" already exists`);
    }

    this.repository.addCategory(category);

    return category;
  };
}

export { AddCategoryUseCase };
