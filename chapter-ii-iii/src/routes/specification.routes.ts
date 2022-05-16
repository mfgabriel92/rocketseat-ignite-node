import { Router } from "express";
import { AddSpecificationController } from "../modules/car/useCases/addSpecification/AddSpecificationController";
import { ListSpecificationsController } from "../modules/car/useCases/listSpecifications/ListSpecificationsController";

const addSpecificationController = new AddSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

const route = Router();

route.post("/", addSpecificationController.handle);
route.get("/", listSpecificationsController.handle);

export { route };
