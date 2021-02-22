import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

import EventsList from './EventsGrid/EventsGrid';
import SectionContainer from '../LayoutUtils/SectionContainer';

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
    <SectionContainer direction="column">
      <Grid item className={classes.featuredTitle}>
        <Typography variant="h3">Upcoming Games</Typography>
      </Grid>
      <EventsList events={events.slice(0, 6)} />
    </SectionContainer>
  );
}
