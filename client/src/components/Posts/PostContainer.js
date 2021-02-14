import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Post from './Post';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    margin: theme.spacing(1),
  },
  postsGrid: {
    margin: theme.spacing(3),
  },
}));

export default function PostContainer({ posts, buttonHandler }) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      spacing={1}
      alignItems="center"
      md={12}
    >
      <Grid item xs={12} md={6} className={classes.title}>
        <Typography variant="h3">Featured Articles</Typography>
      </Grid>
      <Grid item xs={12} md={6} className={classes.title}>
        <Button onClick={() => buttonHandler()}>Featured Articles</Button>
      </Grid>
      <Grid container item direction="row" spacing={2} md={8}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={12} md={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
