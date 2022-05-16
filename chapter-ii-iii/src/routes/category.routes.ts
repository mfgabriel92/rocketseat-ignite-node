import { Router } from "express";
import multer from "multer";
import { AddCategoryController } from "../modules/car/useCases/addCategory/AddCategoryController";
import { ImportCategoriesController } from "../modules/car/useCases/importCategories/ImportCategoriesController";
import { ListCategoriesController } from "../modules/car/useCases/listCategories/ListCategoriesController";

const addCategoryController = new AddCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoriesController = new ImportCategoriesController();

const route = Router();
const upload = multer({ dest: "./tmp" }).single("file");

route.get("/", listCategoriesController.handle);
route.post("/", addCategoryController.handle);
route.post("/upload", upload, importCategoriesController.handle);

export { route };
