import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import EventsList from "./EventsList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  featuredTitle: {
    margin: theme.spacing(1),
  }
}));

export default function EventsContainer(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid item className={classes.featuredTitle}>
            <Typography variant="h3">Upcoming Games</Typography>
        </Grid>
        <EventsList events={props.events}/>
      </Grid>
    </div>
  );
}
