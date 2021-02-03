import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogoBar from "./components/LogoBar";
import EntryPoint from "./components/EntryPoint";
import EventsProvider from "./components/Events/EventsProvider";
import PostsProvider from "./components/Posts/PostsProvider";
import EventDetail from "./components/Events/EventDetail";

function App() {
  return (
    <BrowserRouter>
      <LogoBar />
      <Switch>
        <Route path="/event">
          {/** more specific to less specific */}
          <EventDetail />
        </Route>
        <Route path="/">
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
