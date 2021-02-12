import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import LogoBar from "./components/LogoBar";
import EntryPoint from "./components/EntryPoint";
import EventsProvider from "./components/Events/EventsProvider";
import PostsProvider from "./components/Posts/PostsProvider";
import EventDetail from "./components/Events/EventDetail";
import CreateEvent from "./components/Events/CreateEvent";

function App() {
  return (
    <BrowserRouter>
      <LogoBar />
      <Switch>
        <Route exact path="/event/submitted">
          <div>Thanks for submitting your event!</div>
          <Button color="primary" component={Link} to="/event/create">
            Create another event
          </Button>
        </Route>
        <Route exact path="/event/create">
          <CreateEvent />
        </Route>
        <Route path="/event/:id">
          {/** more specific to less specific */}
          <EventDetail />
        </Route>
        <Route exact path="/">
          <EntryPoint />
          {/** we encapsulate all of the event related logic in one component */}
          <EventsProvider />
          <PostsProvider />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
