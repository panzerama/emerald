import React from 'react';
import axios from 'axios';

import EventsContainer from './EventsContainer';

class EventsProvider extends React.Component {
  // workitem accept some range or filters for events to retrieve
  constructor() {
    super();
    this.state = {
      events: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    const requestConfig = {
      url: 'http://localhost:4000/v1/events',
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    };

    axios(requestConfig)
      .then((response) => {
        this.setState({
          events: response.data,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
          loading: false,
        });
      });
  }

  renderLoading() {
    return <div>Loading ...</div>;
  }

  renderError() {
    // workitem style error element and offer reload action...?
    return <div>Whoops, something went wrong! Reload</div>;
  }

  renderEvents() {
    const { events } = this.state;
    return <EventsContainer events={events} />;
  }

  render() {
    const { loading, events, error } = this.state;
    if (loading) {
      return this.renderLoading();
    } else if (events.length > 0) {
      return this.renderEvents();
    } else if (error) {
      return this.renderError();
    } else {
      return <div>No events found...?</div>;
    }
  }
}

export default EventsProvider;
