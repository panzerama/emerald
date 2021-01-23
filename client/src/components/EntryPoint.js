import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    height: '150px',
  }
}));

export default function EntryPoint() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="flex-start"
      className={classes.root}
      spacing={1}
    >
      <Grid item xs={10}>
        <Paper className={classes.paper}><Typography>Where are you in your adventure?</Typography></Paper>
      </Grid>
      <Grid container item xs={12} direction="row" spacing={5} justify="flex-end">
        <Grid item xs={3}>
          <Paper className={classes.paper}><Typography>Starting out</Typography></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Typography>On the Road</Typography></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Typography>Epic Adventurer</Typography></Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
