import { Router } from "express";
import multer from "multer";
import addCategoryController from "../modules/car/useCases/addCategory";
import importCategoriesController from "../modules/car/useCases/importCategories";
import listCategoriesController from "../modules/car/useCases/listCategories";

const route = Router();
const upload = multer({ dest: "./tmp" }).single("file");

route.get("/", listCategoriesController().handle);
route.post("/upload", upload, importCategoriesController().handle);
route.post("/", addCategoryController().handle);

export { route };
