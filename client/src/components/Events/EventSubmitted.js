import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function EventSubmitted() {
  return (
    <>
      <div>Thanks for submitting your event!</div>
      <Button color="primary" component={Link} to="/event/create">
        Create another event
      </Button>
    </>
  );
}
