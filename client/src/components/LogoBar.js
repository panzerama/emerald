import { React } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Colors from "../styles/colors";
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
  buttonImage: {
    width: '40px',
    height: '40px',
  }
}));

export default function LogoBar(props) {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="menu"
        >
          <img src={emeraldLogo} className={classes.buttonImage} alt='Site Logo'/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Emerald City Game Masters Guild
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
}
