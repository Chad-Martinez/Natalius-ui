import { useState, Fragment } from 'react';
import { Avatar, Badge, Box, Button, Grid, Typography } from '@mui/material';
import CameraModalPopUp from '../ui/Modal';
import CameraCapture from '../ui/CameraCapture';
import AlertDiaglog from '../ui/Modal';
import FileUploader from '../ui/FileUploader';
import { Stack } from '@mui/system';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    cursor: 'pointer',
    right: 35,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const PatientPhotoForm = ({ photoURL, image, setImage, setDeletePhotoURL }) => {
  const [cameraModalIsOpen, setCameraModalIsOpen] = useState(false);
  const [alertModalIsOpen, setAlertModalIsOpen] = useState(false);

  const handleOpenCamera = () => {
    setCameraModalIsOpen(!cameraModalIsOpen);
  };

  const handleOpenAlert = () => {
    setAlertModalIsOpen(!alertModalIsOpen);
  };

  const handleClearImage = () => {
    setImage(null);
    setDeletePhotoURL(true);
  };

  return (
    <Fragment>
      <AlertDiaglog
        open={alertModalIsOpen}
        onClose={handleOpenAlert}
        modalBody={
          'Are you sure you want to delete the patients photo? This action cannot be undone'
        }
        enableSubmit
        submitTitle='Delete'
        onSubmit={handleClearImage}
        submitDisabled={!image && true}
        enableClose
        closeTitle='Cancel'
        title='Delete Patient Photo?'
        warning
      />
      <CameraModalPopUp
        open={cameraModalIsOpen}
        onClose={handleOpenCamera}
        modalBody={
          <CameraCapture
            image={image}
            setImage={setImage}
            setDeletePhotoURL={setDeletePhotoURL}
          />
        }
        enableClose
        closeTitle='Close'
        title='Take Patient Photo'
        dialogSize='sm'
      />
      <Stack
        sx={{
          display: 'flex',
          height: '100%',
        }}
      >
        <Typography marginY={2} component='h1' variant='h6' color='primary'>
          Patient Photo
        </Typography>
        <Grid
          container
          sx={{
            border: 1,
            borderColor: '#c5c5c5',
            borderRadius: '10px',
            padding: 1,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          {image && (
            <Grid
              item
              xs={6}
              sx={{
                height: '100%',
              }}
            >
              <StyledBadge
                badgeContent={<HighlightOffIcon fontSize='sm' />}
                sx={{
                  height: '100%',
                  width: '100%',
                }}
                onClick={handleOpenAlert}
                color='info'
                overlap='circular'
              >
                <Avatar
                  src={image || photoURL}
                  sx={{
                    border: 2,
                    borderColor: '#a8a8a8',
                    height: '100%',
                    width: '100%',
                  }}
                />
              </StyledBadge>
            </Grid>
          )}
          <Grid item xs={image ? 5 : 12}>
            <Stack
              sx={{
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  marginBottom: 1,
                }}
              >
                <FileUploader
                  setImage={setImage}
                  setDeletePhotoURL={setDeletePhotoURL}
                />
              </Box>
              <Button
                sx={{
                  display: 'block',
                }}
                variant='contained'
                type='button'
                color='primary'
                onClick={handleOpenCamera}
              >
                TAKE PHOTO
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Fragment>
  );
};

export default PatientPhotoForm;
