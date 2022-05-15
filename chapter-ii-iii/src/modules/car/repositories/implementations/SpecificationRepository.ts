import { ISpecificationRepository } from "..";
import { ISpecification, Specification } from "../../entities";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];
  private static INSTANCE;

  private constructor() {
    this.specifications = [];
  }

  static getInstance = (): SpecificationRepository => {
    if (!this.INSTANCE) {
      this.INSTANCE = new SpecificationRepository();
    }

    return this.INSTANCE;
  };

  findAll = (): Specification[] => {
    return this.specifications;
  };

  addSpecification = (specification: ISpecification): Specification => {
    const newSpecification = new Specification();

    Object.assign(newSpecification, specification);
    this.specifications.push(newSpecification);

    return newSpecification;
  };
}

export { SpecificationRepository };
