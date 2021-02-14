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

export default function Event(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <h2>{props.event.eventName}</h2>
          <p>{props.event.description}</p>
          <p>{props.event.gameMaster}</p>
          <p>{props.event.date}</p>
          <Link to={`/event/${props.event.id}`}>Go to Event!</Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
