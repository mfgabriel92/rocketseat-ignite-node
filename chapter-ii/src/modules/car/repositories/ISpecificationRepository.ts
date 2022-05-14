import { ISpecification, Specification } from "../models";

interface ISpecificationRepository {
  findAll(): Specification[];
  addSpecification(specification: ISpecification): Specification;
}

export { ISpecificationRepository };
