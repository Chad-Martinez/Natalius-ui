import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    notification: {
      title: '',
      message: '',
    },
    navigation: {
      isDrawerOpen: false,
    },
  },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setIsDrawerOpen(state) {
      state.navigation.isDrawerOpen = !state.navigation.isDrawerOpen;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
