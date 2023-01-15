import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Toolbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Appbar from './Appbar';
import Copyright from './Copyright';
import SideDrawer from './SideDrawer';

const mdTheme = createTheme();

const Layout = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Appbar />
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: 'auto',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {props.children}
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Box>

        {isLoggedIn && <SideDrawer />}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
