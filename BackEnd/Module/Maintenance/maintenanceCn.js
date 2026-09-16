import ApiFeatures, { catchAsync, HandleERROR } from "vanta-api";
import Maintenance from "./maintenanceMd.js";
import { __direname } from "../../app.js";
import fs from "fs";
export const create = catchAsync(async (req, res, next) => {
  console.log("req.body", req.body);
  console.log("req.file", req.file);
  console.log("user id", req.userId);
  const maintenance = await Maintenance.create({
    vehicleId: req.body.vehicleId,
    title: req.body.title,
    type: req.body.type,
    date: req.body.date,
    mileage: req.body.mileage,
    cost: req.body.cost,
    description: req.body.description,
    userId: req.userId,
    receiptImage: req.file ? req.file.filename : "",
  });

  return res.status(201).json({
    success: true,
    message: "Maintenance created successfully",
    data: maintenance,
  });
});

export const getAll = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Maintenance, req.query, req.role)
    .addManualFilters({ userId: req.userId })
    .sort()
    .filter()
    .limitFields()
    .paginate()
    .populate();

  const result = await features.execute();

  return res.status(200).json(result);
});

export const getOne = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Maintenance, req.query, req.role)
    .addManualFilters({ _id: req.params.id, userId: req.userId })
    .sort()
    .filter()
    .limitFields()
    .paginate()
    .populate();

  const result = await features.execute();

  return res.status(200).json(result);
});

export const update = catchAsync(async (req, res, next) => {
  const maintenance = await Maintenance.findOneAndUpdate(
    {
      _id: req.params.id,
      userId: req.userId,
    },
    req.body,
    { new: true, runValidators: true },
  );

  if (!maintenance) {
    return next(new HandleERROR("Maintenance not found", 404));
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
    userId: req.userId,
  });

  if (!maintenance) {
    return next(new HandleERROR("Maintenance not found", 404));
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
