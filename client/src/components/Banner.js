import React from 'react';
import { Box, Container, Typography, makeStyles } from '@material-ui/core';

import dragonBanner from '../images/dragon-banner.png';

const useStyles = makeStyles((theme) => ({ 
  root: {
    width: '100%',
    backgroundImage: `url(${dragonBanner})`,
    height: '60vh',
    display: 'flex',
    justifyContent: 'center'
  },
  headline: {
    margin: theme.spacing(3),
  },
  title: {
    color: 'white',
  }
}));

export default function Banner() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container className={classes.headline}>
        <Typography variant='h1' className={classes.title}>Emerald City Game Masters Guild</Typography>
      </Container>
    </Box>
  )
}