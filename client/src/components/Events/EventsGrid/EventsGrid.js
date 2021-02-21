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

import eventList from './DemoEventsList';

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

export default function EventsList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={5}>
        {eventList.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.cols || 1}
            className={classes.gridTile}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={tile.gameMaster}
              actionIcon={(
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
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
