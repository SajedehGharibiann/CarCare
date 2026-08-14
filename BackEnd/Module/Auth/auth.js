import { Router } from "express";
import { auth, loginOtp, resendCode } from "./authCn.js";

const authRouter = Router();

authRouter.route("/").post(auth)
authRouter.route("/otp").post(loginOtp)
authRouter.route("/resend-code").post(resendCode)


export default authRouter
