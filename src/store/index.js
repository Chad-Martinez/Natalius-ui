import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import patientSlice from './patient-slice';
import uiSlice from './ui-slice';
import diagnosesSlice from './diagnoses-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    patients: patientSlice.reducer,
    diagnoses: diagnosesSlice.reducer,
  },
});

export default store;

