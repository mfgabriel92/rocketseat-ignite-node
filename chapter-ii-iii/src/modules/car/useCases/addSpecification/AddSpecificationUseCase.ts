import { inject, injectable } from "tsyringe";
import { ISpecification } from "../../entities";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories";

@injectable()
class AddSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private repository: ISpecificationRepository
  ) {}

  execute = async (Specification: ISpecification): Promise<Specification> => {
    await this.repository.addSpecification(Specification);
    return Specification;
  };
}

export { AddSpecificationUseCase };
