import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Event from './Event';

export default function EventDetail(props) {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [eventId, setEventId] = useState(id)

  useEffect(() => {
    const config = {
      url: `http://localhost:4000/v1/events/${eventId}`,
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    }
    axios(config).then((response) => {
      setEvent(response.data)
    }).catch((err) => {
      console.log('error in EventDetail useEffect');
    })
  }, [eventId]);

  return <Event event={event} />
}