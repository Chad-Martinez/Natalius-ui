import { Box, Button, Grid, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

import medical_404 from '../assets/images/Medical_404.jpg';

const NotFound404 = () => {
  const history = useHistory();

  const goBackHandler = () => {
    history.goBack();
  };
  return (
    <Grid
      container
      padding={3}
      sx={{
        backgroundColor: 'white',
        height: 'auto',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid display={'flex'} xs={6} item>
        <Box
          component='img'
          sx={{
            height: 'auto',
            maxWidth: '600px',
            width: '100%',
            alignSelf: 'center',
          }}
          alt='404 Page Not Found'
          src={medical_404}
        />
      </Grid>
      <Grid xs={12} item>
        <Typography
          marginY={2}
          align='center'
          component='h1'
          variant='h4'
          color='primary'
        >
          404 - Page Not Found
        </Typography>
      </Grid>
      <Button
        sx={{
          minWidth: '200px',
        }}
        variant='outlined'
        onClick={goBackHandler}
      >
        Go Back
      </Button>
    </Grid>
  );
};

export default NotFound404;
