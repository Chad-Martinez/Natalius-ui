import { createSlice } from '@reduxjs/toolkit';

const vitalsSlice = createSlice({
  name: 'vitals',
  initialState: {
    vitals: [],
    vitalsChartData: {},
    priorVitals: {},
    patientId: '',
  },
  reducers: {
    setAllVitals(state, action) {
      state.vitals = action.payload.vitals;
      state.vitalsChartData = action.payload.vitalsChartData;
      state.priorVitals = action.payload.priorVitals;
      state.patientId = action.payload.patientId;
    },
    setAddVitals(state, action) {
      state.vitals = [...state.vitals, action.payload.vitals];
      state.vitalsChartData = action.payload.vitals;
      state.priorVitals = state.vitals[state.vitals.length - 1];
      state.patientId = action.payload.patientId;
    },
  },
});

export const vitalsActions = vitalsSlice.actions;

export default vitalsSlice;
