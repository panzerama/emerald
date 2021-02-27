import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Header from './components/Header';
import FrontPage from './components/FrontPage';
import EventPage from './components/Events/EventPage';
import Banner from './components/Banner';
import Loading from './components/Loading';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path="/event">
          <EventPage />
        </Route>
        <Route exact path="/">
          <Banner />
          <FrontPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
