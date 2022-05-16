import { Router } from "express";
import multer from "multer";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { AddUserController } from "../modules/account/useCases/addUser/AddUserController";
import { UpdateAvatarController } from "../modules/account/useCases/updateAvatar/UpdateAvatarController";
import { upload } from "../utils/file";

const addUserController = new AddUserController();
const updateAvatarController = new UpdateAvatarController();
const updateAvatar = multer(upload("./tmp/avatar"));

const route = Router();

route.post("/", addUserController.handle);
route.patch(
  "/avatar",
  ensureAuthenticated,
  updateAvatar.single("file"),
  updateAvatarController.handle
);

export { route };
