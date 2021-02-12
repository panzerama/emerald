import React from 'react';
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  yourPathHeadline: {
    height: "150px",
    margin: theme.spacing(2)
  },
  pathOptionsGroup: {
    height: "25vh",
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}));

export default function YourPath() {
  const classes = useStyles();
  return (
    <Grid container fluid justify="flex-start" className={classes.root} spacing={1}>
      <Grid item xs={10}>
        <div className={classes.yourPathHeadline}>
        <Typography variant="h3">
          Where are you in your adventure?
        </Typography>
        <Typography>
            We all have different levels of experience with gaming. Tell us
            more about yours and we'll help you find the right gaming
            experience.
        </Typography>
        </div>
      </Grid>
      <Grid
        container
        item
        xs={12}
        direction="row"
        spacing={5}
        justify="flex-end"
        className={classes.pathOptionsGroup}
      >
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h4">Folk Hero</Typography>
              <Typography>
                Maybe this is your first time with an RPG or maybe not.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" color="primary">
                Get Started
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h4">Adventurer</Typography>
              <Typography>
                You've done this before and are looking for more.
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="medium" color="primary">
                Get Started
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h4">Legend</Typography>
              <Typography>
                Adventure is your middle name. You want to broaden your 
                horizons.
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="medium" color="primary">
                Get Started
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
