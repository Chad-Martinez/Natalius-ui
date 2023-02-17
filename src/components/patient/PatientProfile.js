import { Grid, Box, Typography } from '@mui/material';
import PatientGeneralInfo from './PatientGeneralInfo';
import PatientContactInfo from './PatientContactInfo';

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
      <PatientGeneralInfo />
      <PatientContactInfo patient={patient} />
    </Grid>
  );
};

export default PatientProfile;
