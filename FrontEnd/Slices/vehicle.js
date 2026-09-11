import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vehicles: [],
};

const vehiclesSlice = createSlice({
  name: "vehicle",
  initialState,

  reducers: {
    setVehicles: (state, action) => {
      state.vehicles = action.payload;
    },
    addVehicles: (state, action) => {
      state.vehicles.push(action.payload);
    },
    removeVehicles: (state, action) => {
      state.vehicles = state.vehicles.filter(
        (vehicle) => vehicle._id !== action.payload,
      );
    },
  },
});

export const { setVehicles, addVehicles, removeVehicles } =
  vehiclesSlice.actions;
export default vehiclesSlice.reducer;
