import { ICategoryRepository } from "..";
import { Category, ICategory } from "../../models";

class CategoryRepository implements ICategoryRepository {
  private categories: Category[];
  private static INSTANCE;

  private constructor() {
    this.categories = [];
  }

  static getInstance = (): CategoryRepository => {
    if (!this.INSTANCE) {
      this.INSTANCE = new CategoryRepository();
    }

    return this.INSTANCE;
  };

  findAll = (): Category[] => {
    return this.categories;
  };

  findByName = (name: string): Category => {
    return this.categories.find((c) => c.name === name);
  };

  addCategory = (category: ICategory): Category => {
    const newCategory = new Category();

    Object.assign(newCategory, category);
    this.categories.push(newCategory);

    return newCategory;
  };
}

export { CategoryRepository };
