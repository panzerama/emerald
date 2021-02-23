require('dotenv').config({ path: '../.env' });
const axios = require('axios');
const debug = require('debug')('api');

const GoogleGeocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?';

exports.getLocation = async (targetAddress) => {
  // must be URL encoded for the request
  const encodedAddress = encodeURI(targetAddress);
  const addressParam = `address=${encodedAddress}`;
  const apiKeyParam = `&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  const requestURL = `${GoogleGeocodeURL}${addressParam}${apiKeyParam}`;

  const response = await axios.get(requestURL);
  if (response.data.status === 'OK') {
    const geocodeResult = response.data.results[0];
    const location = {
      readable: geocodeResult.formatted_address,
      latitude: geocodeResult.geometry.location.lat,
      longitude: geocodeResult.geometry.location.lng,
    };
    debug('geocode reformatted ', location);
    return location;
  }

  throw new Error('Geocoding Failed!');
};
