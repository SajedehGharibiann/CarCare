import { Router } from "express";
import { create, getAll, getOne, update, remove } from "./vehicleCn.js";
import isLogin from "../../Middleware/isLogin.js";

const vehicleRouter = Router();

vehicleRouter.route("/").post(isLogin, create);
vehicleRouter.route("/").get(isLogin, getAll);
vehicleRouter.route("/:id").get(isLogin, getOne);
vehicleRouter.route("/:id").put(isLogin, update);
vehicleRouter.route("/:id").delete(isLogin, remove);

export default vehicleRouter;
