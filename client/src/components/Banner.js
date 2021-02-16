import React from 'react';
import {
  Box, Container, Typography, makeStyles,
} from '@material-ui/core';

import dragonBanner from '../images/dragon-banner.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundImage: `url(${dragonBanner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '70vh',
    display: 'flex',
    justifyContent: 'center',
  },
  headline: {
    margin: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    width: '50%',
    textShadow: '1px 1px 2px #28903A',
  },
  subtitle: {
    color: 'white',
    margin: theme.spacing(2),
  },
}));

export default function Banner() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container className={classes.headline}>
        <Typography
          variant="h1"
          className={classes.title}
        >
          Emerald City Game Masters Guild
        </Typography>
        <Typography
          variant="h4"
          className={classes.subtitle}
        >
          Professional Game Masters fostering safe &amp; inclusive tabletop RPG experiences
        </Typography>
      </Container>
    </Box>
  );
}
