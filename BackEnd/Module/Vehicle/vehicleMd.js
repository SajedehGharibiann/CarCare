import mongoose from "mongoose";
const vehicleSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "userId is required"],
    },
    brand: {
      type: String,
      required: [true, "brand is required"],
      trim: true,
    },
    model: {
      type: String,
      required: [true, "model is required"],
      trim: true,
    },
    color: {
      type: String,
      required: [true, "color is required"],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "year is required"],
    },
    plateNumber: {
      type: String,
      required: [true, "plateNumber is required"],
      trim: true,
    },
    mileage: {
      type: Number,
      required: [true, "mileage is required"],
      min: 0,
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true, versionKey: false },
);

export const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;
