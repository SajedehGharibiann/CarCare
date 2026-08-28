import mongoose, { mongo } from "mongoose";
const reminderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: [true, "vehicleId is required"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "userId is required"],
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true, versionKey: false },
);
export const Reminder = mongoose.model("Reminder", reminderSchema);
export default Reminder;
