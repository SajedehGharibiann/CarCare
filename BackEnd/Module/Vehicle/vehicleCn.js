import ApiFeatures, { catchAsync, HandleERROR } from "vanta-api";
import Vehicle from "./vehicleMd.js";

export const createVehicle = catchAsync(async (req, res, next) => {
  const vehicle = await Vehicle.create({
    ...req.body,
    userId: req.user._id,
  });
  return res.status(201).json({
    success: true,
    message: "Vehicle created successfully",
    data: vehicle,
  });
});

export const getAllVehicles = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Vehicle, req.query, req.role)
    .addManualFilters({ userId: req.user._id })
    .sort()
    .paginate()
    .limitFields()
    .filter()
    .populate()
    .search(["brand", "plateNumber", "model"]);

  const result = await features.execute();

  res.status(200).json(result);
});
export const getOneVehicle = catchAsync(async (req, res, next) => {
  const vehicle = Vehicle.findOne({ _id: req.params.id, userId: req.user._id });
  if (!vehicle) {
    return next(new HandleERROR("Vehicle not found", 400));
  }
  res.status(200).json(vehicle);
});

export const updateVehicle = catchAsync(async (req, res, next) => {});
