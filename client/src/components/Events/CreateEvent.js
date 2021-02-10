import React, { useState } from "react";
import { Redirect } from "react-router-dom";
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
} from "@material-ui/core";

const defaultFormValues = {
  eventName: "",
  gameMaster: "",
  date: "",
  time: "",
  location: "",
  description: "",
  keywords: ""
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center'
  },
  formControl: {
    margin: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(1),
  },
  dateRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
}));

export default function CreateEvent() {
  const classes = useStyles();
  const [eventFormValues, setEventFormValues] = useState(defaultFormValues);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(`name ${name} and value ${value}`);
    setEventFormValues({
      ...eventFormValues,
      [name]: value
    });
    console.log(eventFormValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Handled!")
    setSuccess(true)
  }

  if (success) {
    return <Redirect to='/event/submitted' />
  } else {
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
              <MenuItem value={"Allison"}>Allison</MenuItem>
              <MenuItem value={"Doug"}>Doug</MenuItem>
              <MenuItem value={"Json"}>Json</MenuItem>
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
            />
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
}
