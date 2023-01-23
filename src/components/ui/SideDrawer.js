import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { uiActions } from '../../store/ui-slice';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { authActions } from '../../store/auth-slice';
import { useSelector, useDispatch } from 'react-redux';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link, List, Divider, IconButton, Toolbar } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MessageIcon from '@mui/icons-material/Message';
import BarChartIcon from '@mui/icons-material/BarChart';
import ListItemButton from '@mui/material/ListItemButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
  const history = useHistory();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.ui.navigation.isDrawerOpen);

  const toggleDrawer = () => {
    dispatch(uiActions.setIsDrawerOpen());
  };

  const logoutHandler = () => {
    dispatch(authActions.setLogout());
    history.push('/');
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
      <List component='nav'>
        <Link component={RouterLink} to='/dashboard'>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItemButton>
        </Link>
        <Link component={RouterLink} to='/patients'>
          <ListItemButton>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary='Patients' />
          </ListItemButton>
        </Link>
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary='Reports' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText primary='Messages' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary='Account' />
        </ListItemButton>
        <ListItemButton onClick={logoutHandler}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary='Logout' />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
