import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import EventSubmitted from '../components/Events/EventSubmitted';
import CreateEvent from '../components/Events/CreateEvent';
import EventDetail from '../components/Events/EventDetail';

export default function EventPage() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/submitted`}>
        <EventSubmitted />
      </Route>
      <Route exact path={`${path}/create`}>
        <CreateEvent />
      </Route>
      <Route path={`${path}/:id`}>
        <EventDetail />
      </Route>
    </Switch>
  );
}
