import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maintenances: [],
};

export const maintenancesSlice = createSlice({
  name: "maintenances",
  initialState,

  reducers: {
    setMaintenance: (state, action) => {
      state.maintenances = action.payload;
    },
    addMaintenance: (state, action) => {
      state.maintenances.push(action.payload);
    },
    removeMaintenance: (state, action) => {
      state.maintenances = state.maintenances.filter(
        (maintenance) => maintenance._id !== action.payload,
      );
    },
  },
});

export const {setMaintenance,addMaintenance,removeMaintenance}=maintenancesSlice.actions;
export default maintenancesSlice.reducer
