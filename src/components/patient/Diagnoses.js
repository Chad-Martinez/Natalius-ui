import { useState, useEffect } from 'react';
import {
  Grid,
  Box,
  Typography,
  Button,
  Collapse,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
} from '@mui/material';
import { loadDiagnosesByPatient } from '../../store/diagnoses-actions';
import { useDispatch, useSelector } from 'react-redux';
import EditDiagnosesForm from '../forms/EditDiagnosesForm';
import DiagnosesListItem from './DiagnosesListItem';

const Diagnoses = ({ patientId }) => {
  const dispatch = useDispatch();
  const diagnoses = useSelector(
    (state) => state.persistedReducer.diagnoses.diagnoses
  );
  const diagnosesId = useSelector(
    (state) => state.persistedReducer.diagnoses.id
  );
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    dispatch(loadDiagnosesByPatient(patientId));
  }, []);

  const mapDiagnoses = (diagnosis) => {
    return <DiagnosesListItem key={diagnosis._id} diagnosis={diagnosis} />;
  };

  const mappedDiagnoses = diagnoses.length > 0 && diagnoses.map(mapDiagnoses);

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
      <Grid xs={12} item>
        <Collapse in={!openForm}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Diagnosis</TableCell>
                  <TableCell align='right'>Provider</TableCell>
                  <TableCell align='right'>Onset Date</TableCell>
                  <TableCell align='right'>Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{mappedDiagnoses}</TableBody>
            </Table>
          </TableContainer>
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default Diagnoses;
