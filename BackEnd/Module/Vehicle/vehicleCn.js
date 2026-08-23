import ApiFeatures, { catchAsync, HandleERROR } from "vanta-api";
import Vehicle from "./vehicleMd.js";

export const create = catchAsync(async (req, res, next) => {
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

export const getAll = catchAsync(async (req, res, next) => {
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
export const getOne = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Vehicle, req.query, req.role)
    .addManualFilters({ _id: res.params.id, userId: req.user._id })
    .sort()
    .paginate()
    .limitFields()
    .filter()
    .populate()
    .search(["brand", "plateNumber", "model"]);

  const result = await features.execute();

  res.status(200).json(result);
});

export const update = catchAsync(async (req, res, next) => {
  const vehicle = await Vehicle.fineOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    req.body,
    { runValidators: true, new: true },
  );
  if (!vehicle) {
    return next(new HandleError("Vehicle not found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Vehicle updated successfully",
    data: vehicle,
  });
});

export const remove = catchAsync(async (req, res, next) => {
  const vehicle = await Vehicle.findOneAndDelete({
    _id: req.params.id,
    userId: req.user._id,
  });
  if (!vehicle) {
    return next(new HandleERROR("Vehicle not found", 404));
  }
  if (vehicle.image) {
    const imagePath = `${__dirname}/Public/${vehicleImage}`;

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
  }

  res.status(200).json({
    success: true,
    message: "Vehicle deleted successfully",
  });
});
