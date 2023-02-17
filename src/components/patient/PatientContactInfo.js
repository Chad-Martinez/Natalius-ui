import { Grid, Box, Typography } from '@mui/material';
import { Fragment } from 'react';

const PatientContactInfo = ({ patient }) => {
  return (
    <Fragment>
      <Grid container item xs={6} marginTop={2}>
        <Grid item xs={12}>
          <Box marginBottom={0.5} sx={{ width: '100%' }}>
            <Typography
              width={'100%'}
              variant='h4'
              sx={{
                textDecoration: 'underline',
              }}
              fontSize={28}
              color='primary'
            >
              Address
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} item>
          <Typography fontSize={20} color='#333333'>
            {patient.address}
          </Typography>
        </Grid>
        <Grid xs={12} item>
          <Typography fontSize={20} color='#000033'>
            {patient.address2}
          </Typography>
        </Grid>
        <Grid xs={12} item>
          <Typography fontSize={20} color='#000033'>
            {patient.city}, {patient.state} {patient.zip}
          </Typography>
        </Grid>
      </Grid>

      <Grid container xs={6} marginTop={2} item>
        <Grid xs={12} item>
          <Box marginBottom={0.5} sx={{ width: '100%' }}>
            <Typography
              width={'100%'}
              variant='h4'
              sx={{
                textDecoration: 'underline',
              }}
              fontSize={28}
              color='primary'
            >
              Contact
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} item>
          <Typography fontSize={20} color='#000033'>
            Home Phone: {patient.phone}
          </Typography>
        </Grid>
        <Grid xs={12} item>
          <Typography fontSize={20} color='#000033'>
            Cell Phone: None
          </Typography>
        </Grid>
        <Grid xs={12} item>
          <Typography fontSize={20} color='#000033'>
            Email: {patient.email}
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PatientContactInfo;
