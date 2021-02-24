import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';

import EventSubmitted from '../components/Events/EventSubmitted';
import CreateEvent from '../components/Events/CreateEvent';
import EventDetail from '../components/Events/EventDetail';
import MediaUpload from '../components/MediaUpload';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    minHeight: '1000px',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
});

export default function EventPage() {
  const classes = useStyles();
  const { path } = useRouteMatch();
  return (
    <Grid container direction="column" className={classes.root}>
      <Switch>
        <Route exact path={`${path}/submitted`}>
          <EventSubmitted />
        </Route>
        <Route exact path={`${path}/create`}>
          <CreateEvent />
        </Route>
        <Route exact path={`${path}/upload`}>
          <MediaUpload />
        </Route>
        <Route path={`${path}/:id`}>
          <EventDetail />
        </Route>
      </Switch>
    </Grid>
  );
}
