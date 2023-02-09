import { useState } from 'react';
import { Grid, Box, Typography, Button, Collapse } from '@mui/material';
import PatientDiagnosesForm from '../forms/PatientDiagnosesForm';

const Diagnoses = () => {
  const [openForm, setOpenForm] = useState(false);

  const showDiagnosesFormHandler = () => {
    setOpenForm(!openForm);
  };
  return (
    <Grid container marginTop={2} item>
      <Grid xs={10} item>
        <Box marginY={2} sx={{ width: '100%' }}>
          <Typography variant='h4' fontSize={34} align='left' color='primary'>
            Diagnoses
          </Typography>
        </Box>
      </Grid>
      <Grid xs={2} item>
        <Box
          sx={{
            display: 'flex',
            margin: 2,
            height: '45px',
            width: '80%',
          }}
        >
          <Button
            sx={{
              width: '100%',
            }}
            variant='contained'
            type='button'
            onClick={showDiagnosesFormHandler}
          >
            {!openForm ? 'Add' : 'Close'}
          </Button>
        </Box>
      </Grid>
      <Grid xs={12} item>
        <Collapse in={openForm}>
          <PatientDiagnosesForm />
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default Diagnoses;
