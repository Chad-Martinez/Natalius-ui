import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    userId: '',
    hasRegistered: false,
  },
  reducers: {
    setLogin(state, action) {
      state.isAuthenticated = true;
      state.userId = action.payload.userId;
    },
    setIsAuthenticated(state, action) {
      state.isAuthenticated = true;
    },
    setHasRegistered(state) {
      state.hasRegistered = true;
    },
    setLogout(state) {
      state.isAuthenticated = false;
      state.userId = '';
      state.hasRegistered = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
