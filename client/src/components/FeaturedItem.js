import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));

export default function FeaturedItem(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <h2>Some Event</h2>
          <hr />
          <p>Some featured text</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
