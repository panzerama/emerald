import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import FeaturedItem from "./FeaturedItem";
import "./FeaturedItemGroup.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  featuredTitle: {
    margin: theme.spacing(1),
  }
}));

export default function FeaturedItemGroup(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid container item direction="row" className={classes.featuredTitle}>
            <Typography variant="h3">Upcoming Games</Typography>
        </Grid>
        <Grid container item direction="row" wrap="nowrap" spacing={1}>
          {[1, 2, 3, 4, 5].map((value) => (
            <Grid key={value} item xs={2}>
            <FeaturedItem />
          </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
