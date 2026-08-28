import { Router } from "express";
import {
  getProfile,
  updateUser,
  updateProfileImage,
  deleteProfileImage,
  changePassword,
  removeAccount,
} from "./userCn.js";
import isLogin from "../../Middleware/isLogin.js";
import upload from "../../Middleware/upload.js";

const userRouter = Router();

userRouter.route("/").get(isLogin, getProfile);
userRouter.route("/").put(isLogin, updateUser);
userRouter.route("/profile/image").put(isLogin, upload.single("profileImage"),updateProfileImage);
userRouter.route("/profile/image").delete(isLogin, deleteProfileImage);
userRouter.route("/password").put(isLogin, changePassword);
userRouter.route("/account").delete(isLogin, removeAccount);

export default userRouter;
