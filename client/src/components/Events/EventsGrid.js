/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    minWidth: '850px',
    paddingLeft: theme.spacing(2),
  },
  icon: {
    color: 'white',
  },
}));

export default function EventsList({ events }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={5}>
        {events.map((event, index) => (
          <GridListTile
            key={event.image}
            cols={event.cols || 1}
            className={classes.gridTile}
          >
            <img src={`http://localhost:4000${event.image}`} alt={event.eventName} />
            <GridListTileBar
              title={event.eventName}
              subtitle={event.gameMaster}
              actionIcon={(
                <IconButton aria-label={`info about ${event.eventName}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              )}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
