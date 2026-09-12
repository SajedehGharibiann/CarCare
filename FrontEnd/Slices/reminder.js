import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reminder: [],
};

export const reminderSlice = createSlice({
  name: "reminder",
  initialState,

  reducers: {
    setReminder: (state, action) => {
      state.reminder = action.payload;
    },
    addReminder: (state, action) => {
      state.reminder.push(action.payload);
    },
    removeReminder: (state, action) => {
     state.reminder =  state.reminder.filter((reminder) => reminder._id !== action.payload);
    },
  },
});

export const {setReminder,addReminder,removeReminder}=reminderSlice.actions;
export default reminderSlice.reducer;
