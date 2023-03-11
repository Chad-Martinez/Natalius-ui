import {
  Grid,
  Box,
  Typography,
  Stack,
  IconButton,
  Collapse,
} from '@mui/material';
import RadialGauge from '../charts/RadialGauge';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect, useState, useCallback } from 'react';
import VitalsForm from '../forms/VitalsForm';
import { useDispatch, useSelector } from 'react-redux';
import { loadVitalsByPatient } from '../../store/vitals-actions';
import dayjs from 'dayjs';

const Vitals = ({ patientId }) => {
  const [openForm, setOpenForm] = useState(false);
  const [chartData, setChartData] = useState({});
  const dispatch = useDispatch();
  const vitals = useSelector((state) => state.persistedReducer.vitals.vitals);
  const { heightFeet, heightInches, weight, systolic, diastolic, dateCreated } =
    useSelector((state) =>
      state.persistedReducer.vitals?.vitalsChartData
        ? state.persistedReducer.vitals?.vitalsChartData
        : {}
    );
  const {
    heightFeet: priorHeightFeet,
    heightInches: priorHeightInches,
    weight: priorWeight,
    systolic: priorSystolic,
    diastolic: priorDiastolic,
  } = useSelector((state) =>
    state.persistedReducer.vitals.priorVitals
      ? state.persistedReducer.vitals.priorVitals
      : {}
  );

  const handleAddVitals = () => {
    setOpenForm(!openForm);
  };

  const calculateChartData = useCallback(() => {
    const systolicHigher = () => {
      if (systolic > priorSystolic) return 'higher';
      if (systolic < priorSystolic) return 'lower';
    };
    const diastolicHigher = () => {
      if (diastolic > priorDiastolic) return 'higher';
      if (diastolic < priorDiastolic) return 'lower';
    };
    const height = heightFeet * 12 + heightInches;
    const bmi = Math.round((weight / Math.pow(height, 2)) * 703);
    const priorHeight = priorHeightFeet * 12 + priorHeightInches;
    const priorBmi = Math.round((priorWeight / Math.pow(priorHeight, 2)) * 703);
    const bmiHigher = () => {
      if (bmi > priorBmi) return 'higher';
      if (bmi < priorBmi) return 'lower';
    };
    setChartData({
      systolic: {
        percent: (systolic - 90) / 110,
        change: systolicHigher(),
      },
      diastolic: {
        percent: (diastolic - 60) / 80,
        change: diastolicHigher(),
      },
      bmi: { percent: (bmi - 16) / 16, change: bmiHigher() },
    });
  }, [
    systolic,
    diastolic,
    weight,
    heightFeet,
    heightInches,
    priorHeightFeet,
    priorHeightInches,
    priorWeight,
    priorDiastolic,
    priorSystolic,
  ]);

  useEffect(() => {
    dispatch(loadVitalsByPatient(patientId));
    calculateChartData();
  }, [dispatch, patientId, calculateChartData]);

  return (
    <Grid container>
      <Grid xs={12} item sx={{ marginY: 2 }}>
        <Stack>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography fontSize={34} align='left' color='primary'>
              Vitals
            </Typography>
            <IconButton color='primary' onClick={handleAddVitals}>
              <AddCircleIcon fontSize='large' />
            </IconButton>
          </Box>
          {dateCreated && (
            <Typography variant='subtitle2'>
              Last updated: {dayjs(dateCreated).format('ddd DD MMM YYYY')}
            </Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Collapse in={openForm} sx={{ width: '100%' }}>
          <VitalsForm
            handleAddVitals={handleAddVitals}
            patientId={patientId}
            setOpenForm={setOpenForm}
          />
        </Collapse>
      </Grid>
      <Collapse in={!openForm} sx={{ width: '100%' }}>
        <Grid container spacing={1}>
          <Grid xs={12} md={4} item>
            <RadialGauge title='BMI' id='bmi' data={chartData.bmi} />
          </Grid>
          <Grid xs={12} md={4} item>
            <RadialGauge
              title='BP Systolic'
              id='systolic'
              data={chartData.systolic}
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <RadialGauge
              title='BP Diastolic'
              id='diastolic'
              data={chartData.diastolic}
            />
          </Grid>
        </Grid>
      </Collapse>
    </Grid>
  );
};

export default Vitals;
