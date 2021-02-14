import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import LogoBar from './components/LogoBar';
import FrontPage from './views/FrontPage';
import EventDetailPage from './views/EventDetailPage';
import CreateEvent from './components/Events/CreateEvent';
import EventSubmitted from './components/Events/EventSubmitted';
import Banner from './components/Banner';
import Login from './components/Login';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#28903A',
    },
    secondary: {
      main: '#3fbf7fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <LogoBar />
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
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Banner />
            <FrontPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
