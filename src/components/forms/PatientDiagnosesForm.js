import { Fragment, useRef } from 'react';
import { Box, Button, Grid, TextField, Autocomplete } from '@mui/material';
import { useState } from 'react';
import ModalPopUp from '../ui/Modal';
import DiagnosesList from '../patient/DiagnosesList';
import { addDiagnoses } from '../../services/diagnosis-service';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const PatientDiagnosesForm = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState();
  const [conditions, setConditions] = useState([]);
  const [diagnoses, setDiagnoses] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { _id: patientId } = useSelector((state) => state.patients.patient);

  const searchDiagnosisHandler = async (e) => {
    const response = await fetch(
      `https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${e.target.value}`
    );
    const conditionsList = await response.json();
    const refactoredConditionsList = conditionsList[3].map((conditions) => {
      return conditions[0];
    });
    setConditions(refactoredConditionsList);
  };

  const sortDiagnoses = (a, b) => {
    if (a.diagnosis < b.diagnosis) {
      return -1;
    }
    if (a.diagnosis > b.diagnosis) {
      return 1;
    }
    return 0;
  };

  const diagnosisAddHandler = (e) => {
    e.preventDefault();
    const key = Math.random().toString().substring(2, 8);
    const addedDiagnosis = {
      key,
      diagnosis: inputValue,
    };
    const sortedDiagnoses = [...diagnoses, addedDiagnosis];
    if (sortedDiagnoses.length > 1) {
      sortedDiagnoses.sort(sortDiagnoses);
    }
    setDiagnoses(sortedDiagnoses);
    setInputValue('');
    setConditions([]);
    inputRef.current.focus();
  };

  const deleteDiagnosisHandler = (diagnosisId) => {
    const diagnosisIndex = diagnoses.findIndex((diagnosis) => {
      return diagnosis.key === diagnosisId;
    });
    const newDiagnosesArray = [...diagnoses];
    newDiagnosesArray.splice(diagnosisIndex, 1);
    setDiagnoses(newDiagnosesArray);
  };

  const submitDiagnosesHandler = async () => {
    try {
      await addDiagnoses({ diagnoses: diagnoses, patientId: patientId });
      toast.success('Diagnoses Updated');
    } catch (error) {
      toast.error('Error Updating Diagnoses. Try again');
    }
  };

  const modalHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <Fragment>
      <ModalPopUp
        open={modalIsOpen}
        onSubmitDiagnoses={submitDiagnosesHandler}
        onClose={modalHandler}
        diagnoses={diagnoses}
        onSubmit={submitDiagnosesHandler}
      />
      <Box component='form'>
        <Grid container alignItems='center'>
          <Grid item xs={10}>
            <Autocomplete
              disablePortal
              id='diagnosis'
              options={conditions}
              fullWidth
              value={inputValue || ''}
              onChange={(e, newValue) => {
                setInputValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  inputRef={inputRef}
                  {...params}
                  fullWidth
                  label='Search Diagnosis'
                  name='diagnosis'
                  autoFocus
                  onChange={searchDiagnosisHandler}
                />
              )}
            />
          </Grid>
          <Grid item xs={2}>
            <Box
              sx={{
                display: 'flex',
                margin: 2,
                height: '45px',
                width: 'auto',
              }}
            >
              <Button
                sx={{
                  width: '100%',
                }}
                type='submit'
                onClick={diagnosisAddHandler}
                variant='contained'
                disabled={!inputValue}
              >
                Add
              </Button>
            </Box>
          </Grid>
        </Grid>
        <DiagnosesList
          diagnoses={diagnoses}
          onOpenModal={modalHandler}
          onDeleteDiagnosis={deleteDiagnosisHandler}
        />
      </Box>
    </Fragment>
  );
};

export default PatientDiagnosesForm;
