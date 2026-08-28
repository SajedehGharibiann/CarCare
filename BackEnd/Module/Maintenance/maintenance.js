import { Router } from "express";
import { create, getAll, getOne, update, remove } from "./maintenanceCn.js";
import isLogin from "../../Middleware/isLogin.js";

const maintenanceRouter = Router();

maintenanceRouter.route("/").post(isLogin, create);
maintenanceRouter.route("/").get(isLogin, getAll);
maintenanceRouter.route("/:id").get(isLogin, getOne);
maintenanceRouter.route("/:id").put(isLogin, update);
maintenanceRouter.route("/:id").delete(isLogin, remove);

export default maintenanceRouter;
