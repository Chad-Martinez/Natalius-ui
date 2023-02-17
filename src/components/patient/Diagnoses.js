import { useState } from 'react';
import { Grid, Box, Typography, Button, Collapse } from '@mui/material';
import { useSelector } from 'react-redux';
import EditDiagnosesForm from '../forms/EditDiagnosesForm';
import DiagnosesTable from './DiagnosesTable';

const Diagnoses = ({ patientId }) => {
  const diagnoses = useSelector(
    (state) => state.persistedReducer.diagnoses.diagnoses
  );
  const diagnosesId = useSelector(
    (state) => state.persistedReducer.diagnoses.id
  );
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
            {diagnoses.length > 0 ? 'Edit' : 'Add'}
          </Button>
        </Box>
      </Grid>
      <Grid xs={12} item>
        <Collapse in={openForm}>
          <EditDiagnosesForm
            diagnosesId={diagnosesId}
            patientId={patientId}
            diagnoses={diagnoses}
            onShowForm={showDiagnosesFormHandler}
          />
        </Collapse>
      </Grid>
      <DiagnosesTable
        diagnoses={diagnoses}
        patientId={patientId}
        openForm={openForm}
      />
    </Grid>
  );
};

export default Diagnoses;
