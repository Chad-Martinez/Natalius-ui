import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector, useDispatch } from 'react-redux';

import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import { login, register } from '../store/auth-actions';

const AuthPage = () => {
  const history = useHistory();
  const hasRegistered = useSelector(
    (state) => state.persistedReducer.auth.hasRegistered
  );
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(true);
  const showLoginHandler = () => setShowLogin(!showLogin);

  const handleSubmit = (action, data) => {
    if (action === 'LOGIN') {
      return dispatch(login(data, history.push));
    }
    dispatch(register(data));
  };

  useEffect(() => {
    if (hasRegistered) {
      setShowLogin(true);
    }
  }, [hasRegistered]);

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
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
    </Container>
  );
};

export default AuthPage;
