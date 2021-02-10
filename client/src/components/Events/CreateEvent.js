import React, { useState } from "react";

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
  date: "2021-02-11",
  time: "06:30",
  location: "",
  description: "",
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
    <Container maxWidth="sm">
      <Typography className={classes.title} variant="h3">
        Create a New Event
          </Typography>
      <form className={classes.root} onSubmit={(event) => console.log(eventFormValues)}>
        <TextField
          required
          variant="outlined"
          id="eventName"
          label="Required"
          name="eventName"
          value={eventFormValues.eventName}
          className={classes.formControl}
          fullWidth
        />

        <FormControl
          className={classes.formControl}
          fullWidth
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Game Master
            </InputLabel>
          <Select
          variant="outlined"
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

        <div className={classes.dateRow}>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue={eventFormValues.date}
          className={classes.formControl}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <TextField
          id="time"
          label="Start time"
          type="time"
          defaultValue={eventFormValues.time}
          className={classes.formControl}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          variant="outlined"
        />
        </div>
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.formControl}
        >
          Submit
          </Button>
      </form>
    </Container>
  );
}
