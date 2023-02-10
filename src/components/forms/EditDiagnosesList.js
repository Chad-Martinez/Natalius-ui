import { Fragment } from 'react';
import { Container, Box, Chip } from '@mui/material';

const EditDiagnosesList = ({ newDiagnoses, onDeleteDiagnosis }) => {
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
        {newDiagnoses.map((diagnosis) => (
          <Box
            sx={{
              height: '45px',
            }}
            marginRight={1.5}
            marginBottom={1.5}
            key={diagnosis._id}
          >
            <Chip
              label={diagnosis.name}
              variant='outlined'
              color='primary'
              onDelete={() => onDeleteDiagnosis(diagnosis._id)}
              sx={{
                height: '100%',
                width: 'auto',
                fontSize: 20,
              }}
            />
          </Box>
        ))}
      </Container>
    </Fragment>
  );
};

export default EditDiagnosesList;
