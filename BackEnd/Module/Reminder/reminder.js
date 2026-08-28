import { Router } from "express";
import { create, getAll, getOne, update, remove } from "./reminderCn.js";
import isLogin from "../../Middleware/isLogin.js";

const reminderRouter = Router();

reminderRouter.route("/").post(isLogin, create);
reminderRouter.route("/").get(isLogin, getAll);
reminderRouter.route("/:id").get(isLogin, getOne);
reminderRouter.route("/:id").put(isLogin, update);
reminderRouter.route("/:id").delete(isLogin, remove);

export default reminderRouter;
