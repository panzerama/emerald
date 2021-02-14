import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import LogoBar from './components/LogoBar';
import FrontPage from './views/FrontPage';
import EventPage from './views/EventPage';
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
          <Route path="/event">
            <EventPage />
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
