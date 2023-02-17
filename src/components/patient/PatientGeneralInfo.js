import { Grid, Box, Typography } from '@mui/material';
import { Fragment } from 'react';

const PatientGeneralInfo = () => {
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
        <Grid xs={12} md={4} item>
          <Typography fontSize={20} color='#333333'>
            Ethnicity: Pacific Islander
          </Typography>
        </Grid>
        <Grid xs={4} md={4} item>
          <Typography fontSize={20} color='#000033'>
            Height: 5'10"
          </Typography>
        </Grid>
        <Grid xs={4} md={4} item>
          <Typography fontSize={20} color='#000033'>
            Weight: 200 lbs
          </Typography>
        </Grid>
        <Grid xs={4} item>
          <Typography fontSize={20} color='#000033'>
            Age: 26
          </Typography>
        </Grid>
        <Grid xs={4} item>
          <Typography fontSize={20} color='#000033'>
            Sex: Male
          </Typography>
        </Grid>
        <Grid xs={4} item>
          <Typography fontSize={20} color='#000033'>
            Smoker: N
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PatientGeneralInfo;
