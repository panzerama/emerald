import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const useStyles = makeStyles({
  root: {
    width: '300px',
    height: '300px',
  },
});

export default function LocationDetail({ location }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={classes.root} center={location} zoom={10}>
          <Marker
            position={location}
            clickable
            onClick={() => { console.log('Map Marker Click!'); }}
          />
        </GoogleMap>
      </LoadScript>
    </Paper>
  );
}
