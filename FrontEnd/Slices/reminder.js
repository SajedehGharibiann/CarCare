import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reminders: [],
};

export const reminderSlice = createSlice({
  name: "reminder",
  initialState,

  reducers: {
    setReminders: (state, action) => {
      state.reminders = action.payload;
    },
    addReminder: (state, action) => {
      state.reminders.push(action.payload);
    },
    removeReminder: (state, action) => {
     state.reminders =  state.reminder.filter((reminder) => reminder._id !== action.payload);
    },
  },
});

export const {setReminders,addReminder,removeReminder}=reminderSlice.actions;
export default reminderSlice.reducer;
