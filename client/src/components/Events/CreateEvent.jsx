import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import axios from 'axios';

const defaultFormValues = {
  eventName: '',
  gameMaster: '',
  date: '',
  time: '',
  timeZone: '',
  location: '',
  description: '',
  keywords: '',
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

export default function CreateEvent() {
  const classes = useStyles();
  const [eventFormValues, setEventFormValues] = useState(defaultFormValues);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventFormValues({
      ...eventFormValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestConfig = {
      url: 'http://localhost:4000/v1/events',
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: {
        eventName: eventFormValues.eventName,
        gameMaster: eventFormValues.gameMaster,
        date: eventFormValues.date,
        time: eventFormValues.time,
        location: eventFormValues.location,
        description: eventFormValues.description,
        keywords: eventFormValues.keywords,
      },
    };

    axios(requestConfig).then(setSuccess(true));
    // WORKITEM what happens when the submission fails?
  };

  if (success) {
    return <Redirect to="/event/submitted" />;
  }
  return (
    <Container maxWidth="sm">
      <Typography className={classes.title} variant="h3">
        Create a New Event
      </Typography>
      <form
        className={classes.root}
        onSubmit={handleSubmit}
        id="eventCreateForm"
      >
        <TextField
          required
          variant="outlined"
          id="eventName"
          label="Required"
          name="eventName"
          value={eventFormValues.eventName}
          className={classes.formControl}
          onChange={handleInputChange}
          fullWidth
        />

        <FormControl
          className={classes.formControl}
          variant="outlined"
          fullWidth
        >
          <InputLabel id="gameMaster-label">GM</InputLabel>
          <Select
            labelId="gameMaster-label"
            name="gameMaster"
            value={eventFormValues.gameMaster}
            onChange={handleInputChange}
            label="GM"
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
            value={eventFormValues.date}
            className={classes.formControl}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={handleInputChange}
            fullWidth
          />

          <TextField
            name="time"
            label="Start time"
            type="time"
            value={eventFormValues.time}
            className={classes.formControl}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            variant="outlined"
            onChange={handleInputChange}
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
              value={eventFormValues.timeZone}
              onChange={handleInputChange}
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
          value={eventFormValues.description}
          multiline
          rows={4}
          variant="outlined"
          className={classes.formControl}
          fullWidth
          onChange={handleInputChange}
        />
        <TextField
          name="keywords"
          label="Keywords"
          value={eventFormValues.keywords}
          multiline
          rows={4}
          variant="outlined"
          className={classes.formControl}
          fullWidth
          onChange={handleInputChange}
          helperText="Comma separated values, please!"
        />
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
    </Container>
  );
}
