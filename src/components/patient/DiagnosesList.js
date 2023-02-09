import { Fragment } from 'react';
import { Container, Box, Chip, Button } from '@mui/material';

const DiagnosesList = ({ diagnoses, onOpenModal, onDeleteDiagnosis }) => {
  return (
    <Fragment>
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: 1,
        }}
        disableGutters={true}
      >
        {diagnoses.map(({ key, diagnosis }) => (
          <Box
            sx={{
              height: '45px',
            }}
            marginRight={1.5}
            marginBottom={1.5}
            key={key}
          >
            <Chip
              label={diagnosis}
              variant='outlined'
              color='primary'
              onDelete={() => onDeleteDiagnosis(key)}
              sx={{
                height: '100%',
                width: 'auto',
                fontSize: 20,
              }}
            />
          </Box>
        ))}
      </Container>
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
        >
          Reset
        </Button>
        <Button
          onClick={onOpenModal}
          variant='contained'
          disabled={diagnoses.length === 0}
        >
          Submit
        </Button>
      </Box>
    </Fragment>
  );
};

export default DiagnosesList;
