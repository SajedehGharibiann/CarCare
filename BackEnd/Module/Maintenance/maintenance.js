import { Router } from "express";
import { create, getAll, getOne, update, remove } from "./maintenanceCn.js";

const maintenanceRouter = Router();

maintenanceRouter.route("/create").post(create);
maintenanceRouter.route("/getAll").post(getAll);
maintenanceRouter.route("/getOne").post(getOne);
maintenanceRouter.route("/update").post(update);
maintenanceRouter.route("/remove").post(remove);

export default maintenanceRouter;
