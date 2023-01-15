import React from 'react';

import { Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from 'react-redux';

import { uiActions } from '../../store/ui-slice';
import natalius from '../../assets/images/shell.png';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerwidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginRight: drawerwidth,
    width: `calc(100% - ${drawerwidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Appbar = () => {
  const drawerwidth = 240;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const open = useSelector((state) => state.ui.navigation.isDrawerOpen);

  const toggleDrawer = () => {
    dispatch(uiActions.setIsDrawerOpen());
  };

  return (
    <AppBar position='absolute' open={open} drawerwidth={drawerwidth}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <Box
          component='img'
          sx={{
            width: 50,
            padding: 1,
            marginRight: 2,
          }}
          src={natalius}
        />
        <Typography
          component='h1'
          variant='h6'
          color='inherit'
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Natalius
        </Typography>
        {isLoggedIn && (
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={toggleDrawer}
            sx={{
              marginLeft: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
