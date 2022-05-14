import { Specification } from "../../models";
import { ISpecificationRepository } from "../../repositories";

class ListSpecificationsUseCase {
  constructor(private repository: ISpecificationRepository) {}

  execute(): Specification[] {
    return this.repository.findAll();
  }
}

export { ListSpecificationsUseCase };
