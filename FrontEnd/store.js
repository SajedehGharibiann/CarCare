import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import vehicleReducer from "./Slices/vehicle"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    vehicle: vehicleReducer,
  },
});
