import { createSlice } from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patient',
  initialState: {
    patientsList: [],
    patientListItems: [],
    patient: {},
  },
  reducers: {
    setPatientsList(state, action) {
      state.patientsList = action.payload;
    },
    setPatientListItems(state, action) {
      state.patientListItems = action.payload;
    },
    setPatient(state, action) {
      state.patient = action.payload;
    },
  },
});

export const patientActions = patientSlice.actions;

export default patientSlice;
