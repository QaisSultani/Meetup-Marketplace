import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isMenteeLoggedIn: false,
  isMentorLoggedIn: false,
  isAdminLoggedIn: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    menteeSignIn: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.isMenteeLoggedIn = true;
    },
    mentorLogIn: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.isMentorLoggedIn = true;
    },
    signOut: (state) => {
      state.user = {};
      state.isMenteeLoggedIn = false;
      state.isMentorLoggedIn = false;
    },
    adminSignIn: (state) => {
      state.isAdminLoggedIn = true;
    },
    adminSignOut: (state) => {
      state.isAdminLoggedIn = false;
    },
    updateUserProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const {
  menteeSignIn,
  signOut,
  mentorLogIn,
  adminSignIn,
  adminSignOut,
  updateUserProfile,
} = userSlice.actions;
export default userSlice.reducer;
