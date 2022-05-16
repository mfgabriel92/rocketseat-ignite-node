import { container } from "tsyringe";
import {
  UserRepository,
  IUserRepository,
} from "../../modules/account/repositories";
import {
  CategoryRepository,
  ICategoryRepository,
  ISpecificationRepository,
  SpecificationRepository,
} from "../../modules/car/repositories";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);
