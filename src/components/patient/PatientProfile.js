import { Grid, Box, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PatientMedicalInfo from './PatientMedicalInfo';
import PatientContactInfo from './PatientContactInfo';

const PatientProfile = ({ patient, onEditPatient }) => {
  const editPatient = () => {
    onEditPatient();
  };
  return (
    <Grid
      container
      xs={12}
      md={9}
      item
      paddingLeft={2}
      alignContent='flex-start'
    >
      <Grid xs={10} item>
        <Box sx={{ height: '4.25rem', width: '100%' }}>
          <Typography fontSize={45} color='primary'>
            {`${patient.firstName} ${patient.lastName}`}
          </Typography>
        </Box>
      </Grid>
      <Grid
        xs={2}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
        item
      >
        <Button
          variant='contained'
          startIcon={<EditIcon />}
          type='button'
          onClick={editPatient}
          sx={{
            fontSize: 'large',
          }}
        >
          Edit
        </Button>
      </Grid>
      <PatientMedicalInfo medicalInfo={patient.medicalInfo} />
      <PatientContactInfo patient={patient} />
    </Grid>
  );
};

export default PatientProfile;
