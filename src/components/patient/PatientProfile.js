import { Grid, Box, Typography } from '@mui/material';

const PatientProfile = ({ patient }) => {
  return (
    <Grid
      container
      xs={12}
      md={8}
      item
      paddingLeft={2}
      alignContent='flex-start'
    >
      <Box sx={{ height: '4.25rem', width: '100%' }}>
        <Typography fontSize={45} color='primary'>
          {`${patient.firstName} ${patient.lastName}`}
        </Typography>
      </Box>
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
      <Box padding={0}>
        <Grid container xs={12} item>
          <Grid xs={12} md={6} item>
            <Typography fontSize={20} color='#333333'>
              Ethnicity: Pacific Islander
            </Typography>
          </Grid>
          <Grid xs={6} md={3} item>
            <Typography fontSize={20} color='#000033'>
              Height: 5'10"
            </Typography>
          </Grid>
          <Grid xs={6} md={3} item>
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
      </Box>
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
    </Grid>
  );
};

export default PatientProfile;
