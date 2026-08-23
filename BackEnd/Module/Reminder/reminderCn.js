import ApiFeatures, { catchAsync } from "vanta-api";
import Reminder from "./reminderMd.js";

export const create = catchAsync(async (req, res, next) => {
  const reminder = await Reminder.create({
    ...req.body,
    userId: req.user._id,
  });

  return res.status(201).json({
    success: true,
    message: "Reminder created successfully",
    data: reminder,
  });
});

export const getAll = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Reminder, req.query, req.role)
    .addManualFilters({ userId: req.user._id })
    .sort()
    .filter()
    .limitFields();
  paginate().populate();

  const result = await features.execute();

  return res.status(200).json(result);
});

export const getOne = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Reminder, req.query, req.role)
    .addManualFilters({ _id: req.params.id, userId: req.user._id })
    .sort()
    .filter()
    .limitFields();
  paginate().populate();

  const result = await features.execute();

  return res.status(200).json(result);
});

export const update = catchAsync(async (req, res, next) => {
  const reminder = await Reminder.findOneAndUpdate(
    {
      _id: req.params.id,
      userId: req.user.id,
    },
    req.body,
    { new: true, runValidators: true },
  );

  if (!reminder) {
    return next(new HandleError("Reminder not found", 404));
  }
  return res.status(200).json({
    success: true,
    message: "Reminder updated successfully",
    data: reminder,
  });
});

export const remove = catchAsync(async (req, res, next) => {
  const reminder = await Reminder.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id,
  });

  if (!reminder) {
    return next(new HandleError("Reminder not found", 404));
  }

  return res.status(200).json({
    success: true,
    message: "Reminder deleted successfully",
  });
});
