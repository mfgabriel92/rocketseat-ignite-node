import "dotenv/config";
import "reflect-metadata";
import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import { error } from "./routes/error.routes";
import swaggerFile from "./swagger.json";
import "./database";
import "./shared/containers";

const app = express();

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);
app.use(error);

app.listen(3333, () => console.log("Server is now listening on port 3333"));
