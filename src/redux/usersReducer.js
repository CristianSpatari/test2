import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    value: "",
  },
  reducers: {
    userName(state, action) {
      state.value = action.payload;
    },
  },
});

export const { userName } = userSlice.actions;

export default userSlice.reducer;
