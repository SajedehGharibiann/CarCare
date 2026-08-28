import User from "../User/userMd.js";
import { catchAsync, HandleERROR } from "vanta-api";
import { sendAuthCode, verifyCode } from "../../Utils/smsHandler.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export const register = catchAsync(async (req, res, next) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;
  if (!firstName || !lastName || !email || !password || !phoneNumber) {
    return next(
      new HandleERROR(
        "firstName, lastName, email, password and phoneNumber are required",
        400,
      ),
    );
  }
  const user = await User.findOne({ email });
  if (user) {
    return next(new HandleERROR("Email already exists", 409));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    phoneNumber,
  });

  return res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: {
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
        profileImage: newUser.profileImage,
      },
    },
  });
});
export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new HandleERROR("email and password are required", 400));
  }
  const user = await User.findOne({ email });
  if (!user) {
    return next(new HandleERROR("invalid email or password", 401));
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return next(new HandleERROR("invalid email or password", 401));
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  return res.status(200).json({
    success: true,
    message: "User login successfully",
    data: {
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        profileImage: user.profileImage,
      },
      token,
    },
  });
});
