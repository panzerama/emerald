import React from 'react';
import axios from 'axios';

import EventsContainer from './EventsContainer';

const events = [
  {
    id: 1,
    name: "Love is in the Aaracokra",
    date: "2021-02-15T18:33:27-08:00",
    gameMaster: "Jason D Panzer",
    location: "Seattle, WA",
    details: "A crazy bird-brained adventure",
  },
  {
    id: 2,
    name: "Jurassic Park",
    date: "2021-02-22T18:33:27-08:00",
    gameMaster: "Allison Smith",
    location: "Seattle, WA",
    details: "Dinosaurs",
  },
  {
    id: 3,
    name: "Saved by the Spell",
    date: "2021-03-10T19:33:27-08:00",
    gameMaster: "Nikkie Silveira",
    location: "Bothell, WA",
    details: "High school is dark magic",
  },
  {
    id: 4,
    name: "The Land of the Midnight Sun",
    date: "2021-03-28T15:33:27-08:00",
    gameMaster: "Doug Johnson",
    location: "Olympia, WA",
    details: "Vikings run amok",
  },
  {
    id: 5,
    name: "Love is in the Aaracokra",
    date: "2021-02-15T18:33:27-08:00",
    gameMaster: "Jason D Panzer",
    location: "Seattle, WA",
    details: "A crazy bird-brained adventure",
  },
  {
    id: 6,
    name: "Love is in the Aaracokra",
    date: "2021-02-15T18:33:27-08:00",
    gameMaster: "Jason D Panzer",
    location: "Seattle, WA",
    details: "A crazy bird-brained adventure",
  },
]

class EventsProvider extends React.Component {
  // workitem accept some range or filters for events to retrieve
  state = {
    events: null,
    loading: true,
    error: null,
  }

  renderLoading() {
    // workitem style loading banner
    return <div>Loading ...</div>
  }

  renderError() {
    // workitem style error element and offer reload action...?
    return <div>Whoops, something went wrong! Reload</div>
  }

  componentDidMount() {
    console.log("[EventsProvider] componentDidMount")
    
    axios.get('http://localhost:4000/v1/events')
      .then((response) => {
        this.setState({
          events: response,
          loading: false,
        })
      })
      .catch((err) => {
        this.setState({
          error: err,
          loading: false,
        })
      })
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading()
    } else if (this.state.events) {
      return <EventsContainer events={this.state.events} />
    } else {
      return this.renderError()
    }
  }
}

export default EventsProvider;