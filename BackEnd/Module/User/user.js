import { Router } from "express";
import {
  getProfile,
  updateUser,
  updateProfileImage,
  deleteProfileImage,
  changePassword,
  removeAccount,
} from "./userCn.js";

const userRouter = Router();

userRouter.route("/getProfile").post(getProfile);
userRouter.route("/updateUser").post(updateUser);
userRouter.route("/updateProfileImage").post(updateProfileImage);
userRouter.route("/deleteProfileImage").post(deleteProfileImage);
userRouter.route("/changePassword").post(changePassword);
userRouter.route("/removeAccount").post(removeAccount);

export default userRouter;
