import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities";
import { ISpecificationRepository } from "../../repositories";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationRepository")
    private repository: ISpecificationRepository
  ) {}

  execute = async (): Promise<Specification[]> => {
    return this.repository.findAll();
  };
}

export { ListSpecificationsUseCase };
