import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddSpecificationUseCase } from "./AddSpecificationUseCase";

class AddSpecificationController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const { name, description } = request.body;
    const addSpecification = container.resolve(AddSpecificationUseCase);

    addSpecification.execute({ name, description });
    return response.status(201).send();
  };
}

export { AddSpecificationController };
