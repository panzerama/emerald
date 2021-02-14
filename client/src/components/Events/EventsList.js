import React from 'react';
import { GridList, GridListTile, makeStyles } from '@material-ui/core';

import Event from './Event';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

export default function EventsList({ events }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={7}>
        {events.map((event) => (
          <GridListTile key={event.id}>
            <Event event={event} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
