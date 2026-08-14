import User from "../User/userMd.js";
import ApiFeatures, { catchAsync, HandleERROR } from "vanta-api";
import { sendAuthCode, verifyCode } from "../../Utils/smsHandler.js";
import jwt from "jsonwebtoken";
export const auth = catchAsync(async (req, res, next) => {
  const { phoneNumber } = req.body;
  const user = await User.findOne({ phoneNumber });
  const resultSms = await sendAuthCode(phoneNumber);
  if (!resultSms) {
    return res.status(500).json({
      success: false,
      message: resultSms?.message,
    });
  }
  return res.status(200).json({
    success: true,
    message: "otp code sent",
    useExist: user ? true : false,
  });
});
export const loginOtp = catchAsync(async (req, res, next) => {
  const { phoneNumber = null, code = null, fullName } = req.body;
  const user = await User.findOne({ phoneNumber });
  if (!user && !fullName) {
    return next(new HandleERROR("", 400));
  }
  if (!phoneNumber && !code) {
    return next(new HandleERROR("phoneNumber or code is required", 400));
  }
  const resultVerify = await verifyCode(phoneNumber, code);
  if (!resultVerify) {
    return res.status(500).json({
      success: false,
      message: resultVerify?.message,
    });
  }
  let newUser;
  if (!user) {
    newUser = await User.create({ phoneNumber, fullName });
  } else {
    newUser = user;
  }
  const token = jwt.sign({ _id: newUser?._id }, process.env.JWT_SECRET);
  return res.status(200).json({
    success: true,
    message: "user login successfully ",
    data: {
      newUser,
      token,
    },
  });
});
export const resendCode = catchAsync(async (req, res, next) => {
  const { phoneNumber } = req.body;
  const resultSms = await sendAuthCode(phoneNumber);
  if (!resultSms) {
    return res.status(500).json({
      status: false,
      message: resultSms.message,
    });
  }
  return res.status(200).json({
    status: true,
    message: "OTP Code sent",
  });
});
