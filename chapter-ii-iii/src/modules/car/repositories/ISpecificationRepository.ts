import { ISpecification, Specification } from "../entities";

interface ISpecificationRepository {
  findAll(): Specification[];
  addSpecification(specification: ISpecification): Specification;
}

export { ISpecificationRepository };
