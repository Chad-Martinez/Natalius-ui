import { Fragment, useState, useCallback, useEffect } from 'react';
import {
  Paper,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import PatientTableItem from './PatientTableItem';
import Loader from '../ui/Loader';
import { loadPatients } from '../../store/patient-actions';

const PatientsTable = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const patientsList = useSelector(
    (state) => state.persistedReducer.patients.patientsList
  );

  const mapPatientListItems = (patient) => {
    return <PatientTableItem key={patient._id} patient={patient} />;
  };

  const mappedPatients = patientsList.map(mapPatientListItems);

  const getAllPatients = useCallback(async () => {
    try {
      dispatch(loadPatients());
    } catch (error) {
      console.log('LOAD PATIENTS ERROR ', error);
    }
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    getAllPatients();
  }, [setIsLoading, getAllPatients]);
  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <TableContainer
          sx={{
            marginBottom: 5,
          }}
          component={Paper}
        >
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
    </Fragment>
  );
};

export default PatientsTable;
