import { Router } from "express";
import { create, getAll, getOne, update, remove } from "./reminderCn.js";

const reminderRouter = Router();

reminderRouter.route("/create").post(create);
reminderRouter.route("/getAll").post(getAll);
reminderRouter.route("/getOne").post(getOne);
reminderRouter.route("/update").post(update);
reminderRouter.route("/remove").post(remove);

export default reminderRouter;
