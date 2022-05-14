import { Category, ICategory } from "../models";

interface ICategoryRepository {
  findAll(): Category[];
  findByName(name: string): Category;
  addCategory(category: ICategory): Category;
}

export { ICategoryRepository };
