import { Fragment, useEffect, useRef } from 'react';
import {
  Box,
  Chip,
  Button,
  Grid,
  TextField,
  Autocomplete,
} from '@mui/material';
import { useState } from 'react';
import ModalPopUp from '../ui/Modal';
import EditDiagnosesList from './EditDiagnosesList';
import { useDispatch } from 'react-redux';
import {
  addNewPatientDiagnoses,
  updatePatientDiagnoses,
} from '../../store/diagnoses-actions';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

const EditDiagnosesForm = ({
  patientId,
  diagnoses,
  onShowForm,
  diagnosesId,
}) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState();
  const [conditions, setConditions] = useState([]);
  const [newDiagnoses, setNewDiagnoses] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setNewDiagnoses(diagnoses);
  }, [diagnoses]);

  const fetchDiagnosesHandler = async (value) => {
    const response = await fetch(
      `https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${value}&df=primary_name,info_link_data`
    );
    return await response.json();
  };

  const searchDiagnosisHandler = async (e) => {
    const conditionsList = await fetchDiagnosesHandler(e.target.value);

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

  const addDiagnosisHandler = async (e) => {
    e.preventDefault();
    const diagnosisResult = await fetchDiagnosesHandler(inputValue);

    const [diagnosis, infoLink] = diagnosisResult[3][0];
    const match = newDiagnoses.find(({ name }) => {
      return name === diagnosis;
    });

    if (match) {
      setInputValue('');
      setConditions([]);
      inputRef.current.focus();
      return toast.error('Diagnoses already exists');
    }
    const link = infoLink.split(',');
    const key = Math.random().toString().substring(2, 8);

    const addedDiagnosis = {
      _id: key,
      createdDate: dayjs(Date.now()),
      name: diagnosis,
      link: link[0],
    };

    const sortedDiagnoses = [...newDiagnoses, addedDiagnosis];

    if (sortedDiagnoses.length > 1) {
      sortedDiagnoses.sort(sortDiagnoses);
    }

    setNewDiagnoses(sortedDiagnoses);
    setInputValue('');
    setConditions([]);
    inputRef.current.focus();
  };

  const deleteDiagnosisHandler = (diagnosisId) => {
    const diagnosisIndex = newDiagnoses.findIndex((diagnosis) => {
      return diagnosis._id === diagnosisId;
    });
    const newDiagnosesArray = [...newDiagnoses];
    newDiagnosesArray.splice(diagnosisIndex, 1);
    setNewDiagnoses(newDiagnosesArray);
  };

  const submitDiagnosesHandler = async () => {
    const payload = { diagnoses: newDiagnoses, patientId };
    if (diagnosesId) {
      payload['diagnosesId'] = diagnosesId;
      dispatch(updatePatientDiagnoses(payload));
    } else {
      dispatch(addNewPatientDiagnoses(payload));
    }
    onShowForm();
  };

  const modalHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const cancelHandler = () => {
    setNewDiagnoses(diagnoses);
    onShowForm();
  };

  const mappedDiagnoses = newDiagnoses.map((diagnosis) => (
    <Box
      display={'block'}
      sx={{
        height: '45px',
      }}
      margin={2}
      key={diagnosis._id}
    >
      <Chip
        label={diagnosis.name}
        variant='outlined'
        color='primary'
        sx={{
          height: '100%',
          width: 'auto',
          fontSize: 20,
        }}
      />
    </Box>
  ));

  return (
    <Fragment>
      <ModalPopUp
        open={modalIsOpen}
        onClose={modalHandler}
        modalBody={mappedDiagnoses}
        enableSubmit={true}
        submitTitle='Confirm'
        enableClose={true}
        closeTitle='Cancel'
        onSubmit={submitDiagnosesHandler}
        title='Confirm Diagnoses Selections'
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
                onClick={addDiagnosisHandler}
                variant='contained'
                disabled={!inputValue}
              >
                Add
              </Button>
            </Box>
          </Grid>
        </Grid>
        <EditDiagnosesList
          newDiagnoses={newDiagnoses}
          onOpenModal={modalHandler}
          onDeleteDiagnosis={deleteDiagnosisHandler}
        />
        <Box
          sx={{
            display: 'flex',
            marginY: 3,
            justifyContent: 'end',
            height: '45px',
          }}
        >
          <Button
            type='button'
            variant='outlined'
            sx={{
              marginRight: 1,
            }}
            onClick={cancelHandler}
          >
            Cancel
          </Button>
          <Button
            onClick={modalHandler}
            variant='contained'
            disabled={diagnoses === newDiagnoses}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};

export default EditDiagnosesForm;
