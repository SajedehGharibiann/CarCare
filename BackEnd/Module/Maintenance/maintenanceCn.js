import ApiFeatures, { catchAsync } from "vanta-api";
import Maintenance from "./maintenanceMd.js";
import { __direname } from "../../app.js";

export const create = catchAsync(async (req, res, next) => {
  const maintenance = await Maintenance.create({
    ...req.body,
    userId: req.user._id,
  });

  return res.status(201).json({
    success: true,
    message: "Maintenance created successfully",
    data: maintenance,
  });
});

export const getAll = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Maintenance, req.query, req.role)
    .addManualFilters({ userId: req.user._id })
    .sort()
    .filter()
    .limitFields();
  paginate().populate();

  const result = await features.execute();

  return res.status(200).json(result);
});

export const getOne = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Maintenance, req.query, req.role)
    .addManualFilters({ _id: req.params.id, userId: req.user._id })
    .sort()
    .filter()
    .limitFields();
  paginate().populate();

  const result = await features.execute();

  return res.status(200).json(result);
});

export const update = catchAsync(async (req, res, next) => {
  const maintenance = await Maintenance.findOneAndUpdate(
    {
      _id: req.params.id,
      userId: req.user.id,
    },
    req.body,
    { new: true, runValidators: true },
  );

  if (!maintenance) {
    return next(new HandleError("Maintenance not found", 404));
  }
  return res.status(200).json({
    success: true,
    message: "Maintenance updated successfully",
    data: maintenance,
  });
});

export const remove = catchAsync(async (req, res, next) => {
  const maintenance = await Maintenance.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id,
  });

  if (!maintenance) {
    return next(new HandleError("Maintenance not found", 404));
  }

  if (maintenance.receiptImage) {
    const imagePath = `${__direname}/Public/${maintenance.receiptImage}`;

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
  }
  return res.status(200).json({
    success: true,
    message: "Maintenance deleted successfully",
  });
});
