import { getRepository, Repository } from "typeorm";
import { ICategoryRepository } from "..";
import { Category, ICategory } from "../../entities";

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  findAll = async (): Promise<Category[]> => {
    return this.repository.find();
  };

  findByName = async (name: string): Promise<Category | undefined> => {
    return this.repository.findOne({ name });
  };

  addCategory = async (category: ICategory): Promise<Category> => {
    const newCategory = new Category();
    newCategory.name = category.name;
    newCategory.description = category.description;

    await this.repository.save(newCategory);
    return newCategory;
  };
}

export { CategoryRepository };
