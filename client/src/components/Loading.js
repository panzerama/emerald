import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

import logo from '../images/emerald-logo.png';

const useStyles = makeStyles((theme) => ({
  spinner: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'white',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
  },
  logo: {
    height: '200px',
    width: '200px',
    margin: theme.spacing(1),
  },
}));

export default function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.spinner}>
      <img src={logo} className={classes.logo} alt="Loading..." />
      <CircularProgress />
    </div>
  );
}
