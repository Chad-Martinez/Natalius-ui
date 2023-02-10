import { createSlice } from '@reduxjs/toolkit';

const diagnosesSlice = createSlice({
  name: 'diagnoses',
  initialState: {
    diagnoses: [],
    id: '',
  },
  reducers: {
    setDiagnoses(state, action) {
      state.diagnoses = action.payload.diagnoses;
      state.id = action.payload._id;
    },
  },
});

export const diagnosesActions = diagnosesSlice.actions;

export default diagnosesSlice;
