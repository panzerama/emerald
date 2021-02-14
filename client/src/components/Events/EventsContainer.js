import React from 'react';
import {
  Button, Grid, Typography, makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import EventsList from './EventsList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  featuredTitle: {
    margin: theme.spacing(1),
  },
}));

export default function EventsContainer({ events }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid item className={classes.featuredTitle}>
          <Typography variant="h3">Upcoming Games</Typography>
        </Grid>
        <Grid item md={4}>
          <Link to="/event/create">
            <Button>Create Event</Button>
          </Link>
        </Grid>
        <EventsList events={events} />
      </Grid>
    </div>
  );
}
