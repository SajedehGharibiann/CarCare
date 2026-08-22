import mongoose, { mongo } from "mongoose";
const maitenanceSchema = new mongoose.Schema(
  {
    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: [true, "vehicleId is required"],
    },
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
    },
    type: {
      type: String,
      enum: ["Maintenance", "Repair", "Oil Change", "Tire", "Battery", "Other"],
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
    cost: {
      type: Number,
      required: [true, "cost is required"],
      min: 0,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    receiptImage: {
      type: String,
      default: "",
    },
  },
  { timestamps: true, versionKey: false },
);
export const Maitenance = mongoose.model("Maitenance", maitenanceSchema);
export default Maitenance;
