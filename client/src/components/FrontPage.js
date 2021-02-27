import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import YourPath from './YourPath';
import EventsProvider from './Events/EventsProvider';
import PostsProvider from './Posts/PostsProvider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    minHeight: '1000px',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
});

export default function FrontPage() {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root}>
      <YourPath />
      <EventsProvider />
      <PostsProvider />
    </Grid>
  );
}
