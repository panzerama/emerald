import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import axios from '../../utils/AxiosWrapper';

import SectionContainer from '../Util/SectionContainer';
import FileUploader from '../Util/FileUploader';

const validationRules = yup.object({
  eventName: yup.string('Event Name').required('Event name required'),
  gameMaster: yup
    .string('Game Master')
    .oneOf(['Allison', 'Doug', 'Json'], 'Must be a valid GM')
    .required('Game master required'),
  date: yup.string('Date').required('Date required'),
  time: yup.string('Time').required('Time required'),
  timeZone: yup.string('Event Name').required('Event name required'),
  locationType: yup.string('Location Type').matches(/(online|venue)/, 'Location type required'),
  location: yup.string('Location'),
  description: yup.string('Description').required('Description required'),
  keywords: yup.string('Keywords'),
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50vw',
  },
  formControl: {
    margin: theme.spacing(1),
  },
  title: {
    margin: theme.spacing(1),
  },
  dateRow: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
}));

function CreateEvent() {
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { getAccessTokenSilently } = useAuth0();

  const now = new Date();
  const formik = useFormik({
    initialValues: {
      eventName: '',
      gameMaster: '',
      date: now.toISOString().substring(0, 10),
      time: '',
      timeZone: '',
      locationType: '',
      location: '',
      description: '',
      keywords: '',
    },
    validationSchema: validationRules,
    onSubmit: async (values) => {
      console.log('form values ', values);
      const authToken = await getAccessTokenSilently();
      const requestConfig = {
        url: 'http://localhost:4000/v1/events',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        data: {
          eventName: values.eventName,
          gameMaster: values.gameMaster,
          date: values.date,
          time: values.time,
          timeZone: values.timeZone,
          locationType: values.locationType,
          location: values.location,
          description: values.description,
          keywords: values.keywords,
        },
      };

      axios(requestConfig)
        .then(() => {
          setSuccess(true);
        })
        .catch((err) => {
          setError(err);
        });
    },
  });

  if (success) {
    return <Redirect to="/event/submitted" />;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <SectionContainer direction="column">
      <Typography className={classes.title} variant="h3">
        Create a New Event
      </Typography>
      <form
        className={classes.root}
        onSubmit={formik.handleSubmit}
        id="eventCreateForm"
      >
        <TextField
          fullWidth
          variant="outlined"
          className={classes.formControl}
          id="eventName"
          name="eventName"
          label="Event Name"
          value={formik.values.eventName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.eventName && Boolean(formik.errors.eventName)}
        />

        <FormControl
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel id="gameMaster-label">GM</InputLabel>
          <Select
            labelId="gameMaster-label"
            name="gameMaster"
            label="GM"
            value={formik.values.gameMaster}
            onChange={formik.handleChange}
            error={formik.touched.gameMaster && Boolean(formik.errors.gameMaster)}

          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Allison">Allison</MenuItem>
            <MenuItem value="Doug">Doug</MenuItem>
            <MenuItem value="Json">Json</MenuItem>
          </Select>
        </FormControl>

        <div className={classes.dateRow}>
          <TextField
            name="date"
            label="Date"
            type="date"
            variant="outlined"
            value={formik.values.date}
            className={classes.formControl}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            fullWidth
          />

          <TextField
            name="time"
            label="Start time"
            type="time"
            value={formik.values.time}
            className={classes.formControl}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.time && Boolean(formik.errors.time)}
            fullWidth
          />

          <FormControl
            className={classes.formControl}
            variant="outlined"
            fullWidth
          >
            <InputLabel id="timeZone-label">Time Zone</InputLabel>
            <Select
              labelId="timeZone-label"
              name="timeZone"
              value={formik.values.timeZone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.timeZone && Boolean(formik.errors.timeZone)}
              label="Time Zone"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="-1000">Hawaii</MenuItem>
              <MenuItem value="-0900">Alaska</MenuItem>
              <MenuItem value="-0800">Pacific</MenuItem>
              <MenuItem value="-0700">Mountain</MenuItem>
              <MenuItem value="-0600">Central</MenuItem>
              <MenuItem value="-0500">Eastern</MenuItem>
            </Select>
          </FormControl>
        </div>

        <TextField
          required
          name="description"
          label="Event Description"
          value={formik.values.description}
          multiline
          rows={4}
          variant="outlined"
          className={classes.formControl}
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.description && Boolean(formik.errors.description)}
        />

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Where is the event happening?</FormLabel>
          <RadioGroup
            aria-label="location-type"
            name="locationType"
            value={formik.values.locationType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.locationType && Boolean(formik.errors.locationType)}

          >
            <FormControlLabel value="online" control={<Radio />} label="Online" />
            <FormControlLabel value="venue" control={<Radio />} label="Venue" />
          </RadioGroup>
        </FormControl>

        {formik.values.locationType === 'venue'
          ? (
            <TextField
              required
              name="location"
              label="Venue Address"
              value={formik.values.location}
              multiline
              rows={1}
              variant="outlined"
              className={classes.formControl}
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.location && Boolean(formik.errors.location)}
            />
          ) : <></>}
        <TextField
          name="keywords"
          label="Keywords"
          value={formik.values.keywords}
          multiline
          rows={4}
          variant="outlined"
          className={classes.formControl}
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.keywords && Boolean(formik.errors.keywords)}
        />

        <FileUploader />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.formControl}
          form="eventCreateForm"
        >
          Submit
        </Button>
      </form>

    </SectionContainer>
  );
}

export default withAuthenticationRequired(CreateEvent, {
  returnTo: () => '/event/create',
});
