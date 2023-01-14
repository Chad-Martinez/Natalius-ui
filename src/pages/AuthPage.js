import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';

import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import { login, register } from '../store/auth-actions';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Natalius
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const AuthPage = () => {
  const history = useHistory();
  const { isLoggedIn, hasRegistered } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(true);
  const showLoginHandler = () => setShowLogin(!showLogin);

  const handleSubmit = (action, data) => {
    if (action === 'LOGIN') {
      return dispatch(login(data));
    }
    dispatch(register(data));
  };

  useEffect(() => {
    if (hasRegistered) {
      setShowLogin(true);
    }
    if (isLoggedIn) {
      history.push('/dashboard');
    }
  }, [isLoggedIn, history, hasRegistered]);

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {showLogin && <Login onSubmit={handleSubmit} />}
          {!showLogin && <Register onSubmit={handleSubmit} />}
          <Grid container>
            <Grid item xs>
              {showLogin && (
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              )}
            </Grid>
            <Grid item>
              <Link href='#' variant='body2' onClick={showLoginHandler}>
                {showLogin
                  ? "Don't have an account? Register"
                  : 'Already have an account? Login'}
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default AuthPage;
