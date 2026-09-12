import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import vehicleReducer from "./Slices/vehicle";
import maintenanceReducer from "./Slices/maintenance";
import reminderReducer  from "./Slices/reminder";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    vehicle: vehicleReducer,
    reminder: reminderReducer,
    maintenance: maintenanceReducer,
  },
});
