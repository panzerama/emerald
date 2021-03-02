/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Post from './Post';
import SectionContainer from '../Util/SectionContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    margin: theme.spacing(2),
  },
  gridItem: {
    margin: theme.spacing(3),
  },
}));

export default function PostContainer({ posts }) {
  const classes = useStyles();
  return (
    <SectionContainer direction="column">
      <Grid item>
        <Typography variant="h3">Featured Articles</Typography>
      </Grid>
      {posts.map((post) => (
        <Grid key={post._id} item className={classes.gridItem}>
          <Post post={post} />
        </Grid>
      ))}
    </SectionContainer>
  );
}
