import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import patientSlice from './patient-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    patients: patientSlice.reducer,
  },
});

export default store;

