import { Grid, Box, Typography } from '@mui/material';
import RadialGauge from '../charts/RadialGauge';

const Vitals = () => {
  return (
    <Grid container xs={12} marginTop={2} item>
      <Grid xs={12} item>
        <Box marginY={2} sx={{ width: '100%' }}>
          <Typography variant='h4' fontSize={34} align='left' color='primary'>
            Vitals as of 2/2/23
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={4} item>
        <RadialGauge title='BMI' id='bmi' />
      </Grid>
      <Grid xs={12} md={4} item>
        <RadialGauge title='BP Systolic' id='systolic' />
      </Grid>
      <Grid xs={12} md={4} item>
        <RadialGauge title='BP Diastolic' id='diastolic' />
      </Grid>
    </Grid>
  );
};

export default Vitals;
