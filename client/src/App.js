import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import LogoBar from './components/LogoBar';
import FrontPage from './views/FrontPage';
import EventPage from './views/EventPage';
import Banner from './components/Banner';

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
        <Auth0Provider
          domain={process.env.REACT_APP_AUTH_0_DOMAIN}
          clientId={process.env.REACT_APP_AUTH_0_CLIENT_ID}
          redirectUri={window.location.origin}
        >
          <LogoBar />
          <Switch>
            <Route path="/event">
              <EventPage />
            </Route>
            <Route exact path="/">
              <Banner />
              <FrontPage />
            </Route>
          </Switch>
        </Auth0Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
