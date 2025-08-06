import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logedData: { userId: ""},
  isAuthenticated: false
};

const loginSlice = createSlice({
  name: "login-form",
  initialState,
  reducers: {
    setloginData: (state, action) => {
       state.logedData.userId = action.payload.fields;
       state.isAuthenticated=  action.payload.isAuth
    },
  },
});

export default loginSlice.reducer;
export const { setloginData } = loginSlice.actions;
