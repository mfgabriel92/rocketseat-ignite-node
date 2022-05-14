import { Router } from "express";
import multer from "multer";
import { controller as addCategoryController } from "../modules/car/useCases/addCategory";
import { controller as importCategoriesController } from "../modules/car/useCases/importCategories";
import { controller as listCategoriesController } from "../modules/car/useCases/listCategories";

const route = Router();
const upload = multer({ dest: "./tmp" });

route.get("/", listCategoriesController.handle);
route.post("/upload", upload.single("file"), importCategoriesController.handle);
route.post("/", addCategoryController.handle);

export { route };
