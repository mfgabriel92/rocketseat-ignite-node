import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { route as authRoutes } from "./auth.routes";
import { route as categoriesRoutes } from "./category.routes";
import { route as specificationRoutes } from "./specification.routes";
import { route as usersRoutes } from "./users.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/categories", ensureAuthenticated, categoriesRoutes);
router.use("/specifications", ensureAuthenticated, specificationRoutes);

export { router };
