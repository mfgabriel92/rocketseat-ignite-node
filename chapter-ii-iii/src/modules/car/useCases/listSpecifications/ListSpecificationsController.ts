import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private listSpecifications: ListSpecificationsUseCase) {}

  handle = (request: Request, response: Response): void => {
    const Specifications = this.listSpecifications.execute();
    response.status(200).json(Specifications);
  };
}

export { ListSpecificationsController };
