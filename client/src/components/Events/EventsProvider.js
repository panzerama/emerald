import React, { useEffect, useState } from 'react';
import axios from '../../utils/AxiosWrapper';

import EventsContainer from './EventsContainer';

export default function EventsProvider() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const renderLoading = () => <div>Loading ...</div>;
  const renderError = () => <div>Whoops, something went wrong! Reload</div>;
  const renderEvents = () => <EventsContainer events={events} />;

  useEffect(() => {
    const requestConfig = {
      url: 'http://localhost:4000/v1/events',
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    };

    axios(requestConfig)
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return renderLoading();
  } else if (events.length > 0) {
    return renderEvents();
  } else if (error) {
    return renderError();
  } else {
    return <div>No events found...?</div>;
  }
}
