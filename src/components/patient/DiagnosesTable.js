import { useState, useEffect, Fragment } from 'react';
import {
  Grid,
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
import { useDispatch } from 'react-redux';
import DiagnosesTableItem from './DiagnosesTableItem';
import Loader from '../ui/Loader';

const DiagnosesTable = ({ diagnoses, patientId, openForm }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDiagnosesByPatient(patientId));
    setIsLoading(false);
  }, [setIsLoading, dispatch, patientId]);

  const mapDiagnoses = (diagnosis) => {
    return <DiagnosesTableItem key={diagnosis._id} diagnosis={diagnosis} />;
  };

  const mappedDiagnoses = diagnoses.length > 0 && diagnoses.map(mapDiagnoses);

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </Fragment>
  );
};

export default DiagnosesTable;
