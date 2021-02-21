import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexShrink: 0,
    padding: theme.spacing(2),
    width: '80vw',
  },
}));

export default function SectionContainer({ direction, children }) {
  const classes = useStyles();
  return (
    <Grid item container direction={direction} className={classes.root} spacing={1}>
      { children }
    </Grid>
  );
}
