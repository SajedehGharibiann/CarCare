import { Router } from "express";
import { create, getAll, getOne, update, remove } from "./vehicleCn.js";

const vehicleRouter = Router();

vehicleRouter.route("/create").post(create);
vehicleRouter.route("/getAll").post(getAll);
vehicleRouter.route("/getOne").post(getOne);
vehicleRouter.route("/update").post(update);
vehicleRouter.route("/remove").post(remove);

export default vehicleRouter;
