import React from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    margin: theme.spacing(1),
  },
  imageSelector: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(1),
    width: '100%',
  },
  imageUploader: {
    width: '10vw',
    margin: theme.spacing(1),
  },
}));

export default function FileUploader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imageSelector}>
        <Button
          variant="contained"
          color="primary"
        >
          Choose a featured image:
        </Button>

        <Typography> The filename </Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.imageUploader}
      >
        Upload
      </Button>
    </div>
  );
}
