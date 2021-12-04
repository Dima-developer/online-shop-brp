import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createStyles, makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../../assets/images/logo-brp.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: '1rem',
    },
    title: {
      flexGrow: 1,
    },
    linkLogo: {
      flexGrow: 1,
    },
    logo: {
      maxWidth: 40,
      marginRight: '10px',
    },
  })
);
// const AtvElements: string[] = [
//   'Side-By-Side',
//   'All-Terrain-Vehicle'
// ];
// const SnowmobileElements: string[] = [
//   'Ski-Doo',
//   'Lynx',
// ];
// const JetSkisElements: string[] = [
//   'Pleasure jet skis',
//   'Recreational jet skis',
//   'Super powerful jet skis',
//   'Jet ski berths'
// ]

const Navbar: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLoginRoute = () => {
    navigate('/login');
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <NavLink to='/' className={classes.linkLogo}>
            <img src={logo} alt='logo' className={classes.logo} />
          </NavLink>

          <Button color='inherit' onClick={handleLoginRoute}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
