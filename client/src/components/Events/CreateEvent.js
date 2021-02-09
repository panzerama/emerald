import React, { useState } from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";

const defaultFormValues = {
  eventName: "Event Name",
  gameMaster: "",
  date: Date.now,
  location: "Seattle, WA",
  description: "Describe your session...",
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(2),
    flexGrow: 1,
  },
  title: {
    margin: theme.spacing(1),
  },
}));

export default function CreateEvent() {
  const classes = useStyles();
  const [eventFormValues, setEventFormValues] = useState(defaultFormValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(`name ${name} and value ${value}`);
    setEventFormValues({
      ...eventFormValues,
      [name]: value
    });
    console.log(eventFormValues);
  };

  return (
    <form className={classes.root} onSubmit={(event) => console.log(eventFormValues)}>
      <Grid
        container
        direction="column"
        className={classes.formGrid}
        spacing={2}
      >
        <Grid item>
          <Typography className={classes.title} variant="h3">
            Create a New Event
          </Typography>
        </Grid>
        <Grid item md={4}>
          <TextField
            required
            id="eventName"
            label="Required"
            name="eventName"
            value={eventFormValues.eventName}
            variant="outlined"
            className={classes.formControl}
            fullWidth
          />
        </Grid>
        <Grid item md={4}>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            fullWidth
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Game Master
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={eventFormValues.gameMaster}
              onChange={handleInputChange}
              label="Game Master"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Allison"}>Allison</MenuItem>
              <MenuItem value={"Doug"}>Doug</MenuItem>
              <MenuItem value={"Json"}>Json</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item md={2}>
            <TextField
              id="date"
              label="Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.formControl}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item md={2}>
            <TextField
              id="time"
              label="Start time"
              type="time"
              defaultValue="07:30"
              className={classes.formControl}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item md={4}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Describe the session..."
            multiline
            rows={4}
            variant="outlined"
            className={classes.formControl}
            fullWidth
          />
        </Grid>
        <Grid item md={4}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.formControl}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
