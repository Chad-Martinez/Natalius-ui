import { Grid, Box, Typography } from '@mui/material';
import { Fragment } from 'react';

const PatientMedicalInfo = ({ medicalInfo }) => {
  const { ethnicity, heightFeet, heightInches, weight, dob, age, smoker } =
    medicalInfo;

  return (
    <Fragment>
      <Box marginTop={1} marginBottom={0.5} sx={{ width: '100%' }}>
        <Typography
          width={'100%'}
          variant='h4'
          fontSize={28}
          sx={{
            textDecoration: 'underline',
          }}
          color='primary'
        >
          General Information
        </Typography>
      </Box>
      <Grid container xs={12} item>
        <Grid xs={12} md={6} item>
          <Typography fontSize={20} color='#333333'>
            Ethnicity: {ethnicity}
          </Typography>
        </Grid>
        <Grid xs={4} md={3} item>
          <Typography fontSize={20} color='#000033'>
            Height: {heightFeet}' {heightInches}"
          </Typography>
        </Grid>
        <Grid xs={4} md={3} item>
          <Typography fontSize={20} color='#000033'>
            Weight: {weight} lbs
          </Typography>
        </Grid>
        <Grid xs={3} item>
          <Typography fontSize={20} color='#000033'>
            DOB: {dob}
          </Typography>
        </Grid>
        <Grid xs={3} item>
          <Typography fontSize={20} color='#000033'>
            Age: {age}
          </Typography>
        </Grid>
        <Grid xs={3} item>
          <Typography fontSize={20} color='#000033'>
            Sex: Male
          </Typography>
        </Grid>
        <Grid xs={3} item>
          <Typography fontSize={20} color='#000033'>
            Smoker: {smoker}
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PatientMedicalInfo;
