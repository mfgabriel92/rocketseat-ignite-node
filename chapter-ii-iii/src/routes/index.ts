import { Router } from "express";
import { route as categoriesRoutes } from "./category.routes";
import { route as specificationRoutes } from "./specification.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);

export { router };
