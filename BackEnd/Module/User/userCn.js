import { catchAsync, HandleERROR } from "vanta-api";
import User from "./userMd.js";
import { __direname } from "../../app.js";

export const getProfile = catchAsync(async (req, res, next) => {
  const user = await User.findById(res.user._id).select("-password");

  if (!user) {
    return next(new HandleError("User not found", 404));
  }

  return res.status(200).json({
    success: true,
    data: user,
  });
});

export const updateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
    },
    { new: true, runValidators: true },
  ).select("-password");
  if (!user) {
    return next(new HandleERROR("User not found", 404));
  }
  return res.status(200).json({
    success: true,
    message: "Profile updated successfully",
    data: user,
  });
});

export const updateProfileImage = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return next(new HandleError("Profile image is required", 400));
  }
  const user = await User.findById(req.user._id);
  if (!user) {
    return next(new HandleError("User not found", 404));
  }

  if (user.profileImage) {
    const oldImagePath = `${__direname}/Public/${user.profileImage}`;
    if (fs.existsSync(oldImagePath)) {
      fs.unlinkSync(oldImagePath);
    }
  }
  user.profileImage = `User/${req.file.__filename}`;

  await user.save();

  return res.status(200).json({
    success: true,
    message: "Profile image updated successfully",
    data: user,
  });
});

export const deleteProfileImage = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    return next(new HandleError("User not found", 404));
  }
  if (user.profileImage) {
    const imagePath = `${__direname}/Public/${user.profileImage}`;

    if (fs.existSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    user.profileImage = null;
    await user.save();
  }
  return res.status(200).json({
    success: true,
    message: "Profile image deleted successfully",
  });
});

export const changePassword = catchAsync(async (req, res, next) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword) {
    return next(
      new HandleError("currentPassword and newPassword is required", 400),
    );
  }

  const user = await User.findById(req.user._id);
  if (!user) {
    return next(new HandleError("User not found", 404));
  }

  const isPasswordCorrect = await bcrypt.compare(
    currentPassword,
    user.password,
  );
  if (!isPasswordCorrect) {
    return next(new HandleError("Current password is incorrect", 400));
  }

  user.password = bcrypt.hash(newPassword, 10);

  await user.save();

  return res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
});

export const removeAccount = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.user._id);

  if (!user) {
    return next(new HandleError("User not found", 404));
  }

  return res.status(200).json({
    success: true,
    message: "Account deleted successfully",
  });
});
