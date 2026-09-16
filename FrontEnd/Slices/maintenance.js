import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maintenance: [],
};

export const maintenancesSlice = createSlice({
  name: "maintenance",
  initialState,

  reducers: {
    setMaintenance: (state, action) => {
      state.maintenance = action.payload;
    },
    addMaintenance: (state, action) => {
      state.maintenance.push(action.payload);
    },
    removeMaintenance: (state, action) => {
      state.maintenance = state.maintenance.filter(
        (item) => item._id !== action.payload,
      );
    },
  },
});

export const {setMaintenance,addMaintenance,removeMaintenance}=maintenancesSlice.actions;
export default maintenancesSlice.reducer
