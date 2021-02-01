import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
} from "@material-ui/core";

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
          <h2>{props.event.name}</h2>
          <p>{props.event.details}</p>
          <p>{props.event.gameMaster}</p>
          <p>{props.event.date}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
