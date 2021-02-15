import React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';

import Colors from '../styles/colors';
import emeraldLogo from '../images/emerald-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: Colors.darkGreen,
  },
  icon: {
    width: '40px',
    height: '40px',
  },
  navOption: {
    margin: theme.spacing(2),
  },
}));

export default function LogoBar() {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();
  /** WORKITEM Show login and signup if not authed, show logout if not */
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="menu"
        >
          <img src={emeraldLogo} className={classes.icon} alt="Site Logo" />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Emerald City Game Masters Guild
        </Typography>
        <Button className={classes.navOption} variant="outlined" color="inherit">Find a Game</Button>
        <Button className={classes.navOption} variant="outlined" color="inherit">About the Guild</Button>
        <Button
          className={classes.navOption}
          variant="outlined"
          color="inherit"
          onClick={() => { loginWithRedirect(); }}
        >
          Login
        </Button>
        <Button className={classes.navOption} variant="outlined" color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
}
