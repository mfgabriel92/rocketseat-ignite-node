import { Router } from "express";
import { AuthenticateUserController } from "../modules/account/useCases/authenticateUser/AuthenticateUserController";

const authenticateUserController = new AuthenticateUserController();

const route = Router();

route.post("/", authenticateUserController.handle);

export { route };
