import mongoose from "mongoose";
const fuelSchema = new mongoose.Schema(
  {
    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: [true, "vehicleId is required"],
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
    mileage: {
      type: Number,
      required: [true, "mileage is required"],
      min: 0,
    },
    liters: {
      type: Number,
      required: [true, "liters is required"],
      min: 0,
    },
    amount: {
      type: Number,
      required: [true, "liters is required"],
      min: 0,
    },
  },
  { timestamps: true, versionKey: false },
);
export const Fuel = mongoose.model("Fuel", fuelSchema);
export default Fuel;
