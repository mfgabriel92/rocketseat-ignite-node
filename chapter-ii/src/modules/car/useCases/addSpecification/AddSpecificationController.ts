import { Request, Response } from "express";
import { AddSpecificationUseCase } from "./AddSpecificationUseCase";

class AddSpecificationController {
  constructor(private addSpecification: AddSpecificationUseCase) {}

  handle = (request: Request, response: Response): Response => {
    const { name, description } = request.body;
    this.addSpecification.execute({ name, description });
    return response.status(201).send();
  };
}

export { AddSpecificationController };
