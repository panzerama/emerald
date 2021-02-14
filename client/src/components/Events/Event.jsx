import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));

export default function Event({ event }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <h2>{event.eventName}</h2>
          <p>{event.description}</p>
          <p>{event.gameMaster}</p>
          <p>{event.date}</p>
          <Link to={`/event/${event.id}`}>Go to Event!</Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
