import mongoose, { Mongoose } from "mongoose";
const expenseSchema = new mongoose.Schema(
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
    category: {
      type: String,
      required: [true, "category is required"],
      enum: [
        "Fuel",
        "Maintenance",
        "Repair",
        "Insurance",
        "Car Wash",
        "Parking",
        "Toll",
        "Other",
      ],
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
      min: 0,
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true, versionKey: false },
);
export const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;
