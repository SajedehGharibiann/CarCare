import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      required: [true, "phoneNumber is required"],
      unique: [true, "phoneNumber is unique"],
      trim: true,
    },
    firstName: {
      type: String,
      required: [true, "fullname is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "username is required"],
      trim: true,
    },
    profileImage: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "email is unique"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: 6,
    },
  },
  { timestamps: true, versionKey: false },
);
export const User = mongoose.model("User", userSchema);
export default User;
