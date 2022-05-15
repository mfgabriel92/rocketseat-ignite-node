import { Category, ICategory } from "../entities";

interface ICategoryRepository {
  findAll(): Promise<Category[]>;
  findByName(name: string): Promise<Category | undefined>;
  addCategory(category: ICategory): Promise<Category>;
}

export { ICategoryRepository };
