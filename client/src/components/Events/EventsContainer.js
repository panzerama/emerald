import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

import EventsGrid from './EventsGrid';
import SectionContainer from '../Util/SectionContainer';

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
  // workitem this is cumbersome
  const gridEvents = [];
  [2, 1, 2, 1, 2, 2].forEach((col, index) => {
    const eventWithCol = events[index];
    eventWithCol.cols = col;
    gridEvents.push(eventWithCol);
  });
  return (
    <SectionContainer direction="column">
      <Grid item className={classes.featuredTitle}>
        <Typography variant="h3">Upcoming Games</Typography>
      </Grid>
      <EventsGrid events={gridEvents} />
    </SectionContainer>
  );
}
