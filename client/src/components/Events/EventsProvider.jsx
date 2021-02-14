import React from "react";
import axios from "axios";

import EventsContainer from "./EventsContainer";

class EventsProvider extends React.Component {
  // workitem accept some range or filters for events to retrieve
  state = {
    events: [],
    loading: true,
    error: null,
  };

  renderLoading() {
    // workitem style loading banner
    return <div>Loading ...</div>;
  }

  renderError() {
    // workitem style error element and offer reload action...?
    return <div>Whoops, something went wrong! Reload</div>;
  }

  renderEvents() {
    return <EventsContainer events={this.state.events} />;
  }

  componentDidMount() {
    console.log("[EventsProvider] componentDidMount, great for making the first network calls");

    const requestConfig = {
      url: "http://localhost:4000/v1/events",
      method: "get",
      headers: { "Content-Type": "application/json" },
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

  componentDidUpdate() {
    console.log("[EventsProvider] componentDidUpdate, great for updating after state changes");
  }

  componentWillUnmount() {
    console.log("[EventsProvider] componentWillUnmount, great for cleaning up after a component");
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    } else if (this.state.events.length > 0) {
      return this.renderEvents();
    } else {
      return this.renderError();
    }
  }
}

export default EventsProvider;
