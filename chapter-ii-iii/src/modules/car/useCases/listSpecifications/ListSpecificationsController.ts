import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const listSpecifications = container.resolve(ListSpecificationsUseCase);
    const specifications = await listSpecifications.execute();
    return response.status(200).json(specifications);
  };
}

export { ListSpecificationsController };
