import { getRepository, Repository } from "typeorm";
import { ISpecificationRepository } from "..";
import { ISpecification, Specification } from "../../entities";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  findAll = async (): Promise<Specification[]> => {
    return this.repository.find();
  };

  addSpecification = async (
    specification: ISpecification
  ): Promise<Specification | undefined> => {
    const newSpecification = new Specification();
    newSpecification.name = specification.name;
    newSpecification.description = specification.description;

    await this.repository.save(newSpecification);
    return newSpecification;
  };
}

export { SpecificationRepository };
