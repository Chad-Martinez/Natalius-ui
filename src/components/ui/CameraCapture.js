import { useRef, useCallback, useState, useEffect, Fragment } from 'react';
import { Box, Stack, Button } from '@mui/material';
import Webcam from 'react-webcam';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { MoonLoader } from 'react-spinners';

const CameraCapture = ({ image, setImage, setDeletePhotoURL }) => {
  const [cameraStatus, setCameraStatus] = useState({
    isLoading: true,
    webcamDisplay: 'none',
  });
  const webcamRef = useRef(null);

  useEffect(() => {});

  const handlePhotoCapture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setDeletePhotoURL(true);
  }, [webcamRef, setImage, setDeletePhotoURL]);

  const handleRetakePhoto = () => {
    setImage(null);
    setCameraStatus({ isLoading: true, webcamDisplay: 'none' });
  };

  const checkingMediaStatus = () => {
    setCameraStatus({ isLoading: false, webcamDisplay: '' });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {image ? (
        <Stack spacing={1}>
          <img alt='patient' src={image} />
          <Button
            variant='outlined'
            color='info'
            startIcon={<PhotoCameraIcon />}
            onClick={handleRetakePhoto}
          >
            RETAKE PHOTO
          </Button>
        </Stack>
      ) : (
        <Fragment>
          {cameraStatus.isLoading && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '250px',
                widows: 'auto',
              }}
            >
              <MoonLoader color='#0688d1' />
            </Box>
          )}
          <Stack spacing={1} display={cameraStatus.webcamDisplay}>
            <Webcam
              onUserMedia={checkingMediaStatus}
              width={400}
              ref={webcamRef}
              screenshotFormat='image/jpeg'
            />
            <Button
              variant='contained'
              color='info'
              startIcon={<PhotoCameraIcon />}
              onClick={handlePhotoCapture}
            >
              TAKE PHOTO
            </Button>
          </Stack>
        </Fragment>
      )}
    </Box>
  );
};

export default CameraCapture;
