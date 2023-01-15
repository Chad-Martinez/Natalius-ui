import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { uiActions } from '../../store/ui-slice';
import { useSelector, useDispatch } from 'react-redux';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { List, Divider, IconButton, Toolbar } from '@mui/material';

import { mainListItems } from './listItems';

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerwidth }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerwidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const SideDrawer = () => {
  const drawerwidth = 240;
  const dispatch = useDispatch();
  const open = useSelector((state) => state.ui.navigation.isDrawerOpen);

  const toggleDrawer = () => {
    dispatch(uiActions.setIsDrawerOpen());
  };
  return (
    <Drawer
      variant='permanent'
      anchor='right'
      open={open}
      drawerwidth={drawerwidth}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronRightIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component='nav'>{mainListItems}</List>
    </Drawer>
  );
};

export default SideDrawer;
