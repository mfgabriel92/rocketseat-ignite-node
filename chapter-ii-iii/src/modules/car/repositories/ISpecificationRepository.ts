import { ISpecification, Specification } from "../entities";

interface ISpecificationRepository {
  findAll(): Promise<Specification[]>;
  addSpecification(
    specification: ISpecification
  ): Promise<Specification | undefined>;
}

export { ISpecificationRepository };
