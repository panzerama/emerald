import React, { useState, useEffect } from 'react';
import axios from '../../wrappers/axiosWrapper';
import { useParams } from 'react-router-dom';

import Event from './Event';

export default function EventDetail(props) {
  const [ event, setEvent ] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const config = {
      url: `http://localhost:4000/v1/events/${id}`,
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    }
    axios(config).then((response) => {
      setEvent(response.data)
    }).catch((err) => {
      console.log('error in EventDetail useEffect');
    })
  }, []);

  return <Event event={event} />
}