import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  Link,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import PatientListItem from '../components/patient/PatientListItem';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadPatients } from '../store/patient-actions';
import Loader from '../components/ui/Loader';

// refactor table to its own table component
// add a stick header to the table

const PatientsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.persistedReducer.auth.token);
  const patientsList = useSelector(
    (state) => state.persistedReducer.patients.patientsList
  );

  const mapPatientListItems = (patient) => {
    return <PatientListItem key={patient._id} patient={patient} />;
  };

  const mappedPatients = patientsList.map(mapPatientListItems);

  const getAllPatients = useCallback(async () => {
    try {
      dispatch(loadPatients(token));
    } catch (error) {
      console.log('LOAD PATIENTS ERROR ', error);
    }
    setIsLoading(false);
  }, [token, dispatch]);

  useEffect(() => {
    getAllPatients();
  }, [setIsLoading, getAllPatients]);

  return (
    <Container
      component='main'
      sx={{
        backgroundColor: 'white',
        flexGrow: 1,
        height: 'auto%',
        overflow: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography marginTop={2} component='h1' variant='h4' color='primary'>
          Patient's Page
        </Typography>
        <Link component={RouterLink} to='/patient/patient-form'>
          <Button
            sx={{
              marginY: 2,
            }}
            variant='contained'
          >
            Add Patient
          </Button>
        </Link>
      </Box>
      {isLoading ? (
        <Loader />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Patient Name</TableCell>
                <TableCell align='right'>Date of Birth</TableCell>
                <TableCell align='right'>Height</TableCell>
                <TableCell align='right'>Weight</TableCell>
                <TableCell align='right'></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{mappedPatients}</TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default PatientsPage;
