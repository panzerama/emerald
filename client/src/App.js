import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LogoBar from './components/LogoBar';
import FrontPage from './views/FrontPage';
import EventDetailPage from './views/EventDetailPage';
import CreateEvent from './components/Events/CreateEvent';
import EventSubmitted from './components/Events/EventSubmitted';
import Banner from './components/Banner';

function App() {
  return (
    <BrowserRouter>
      <LogoBar />
      <Banner />
      <Switch>
        {/** workitem refactor events into sub-router */}
        {/** https://reactrouter.com/web/example/nesting */}
        <Route exact path="/event/submitted">
          <EventSubmitted />
        </Route>
        <Route exact path="/event/create">
          <CreateEvent />
        </Route>
        <Route path="/event/:id">
          <EventDetailPage />
        </Route>
        <Route path="/login" />

        <Route exact path="/">
          <FrontPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
