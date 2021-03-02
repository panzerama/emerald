import React, { useEffect, useState } from 'react';
import axios from '../../utils/AxiosWrapper';

import PostContainer from './PostContainer';

export default function PostsProvider() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const requestConfig = {
      url: 'http://localhost:4000/v1/posts',
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    };

    axios(requestConfig)
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const renderLoading = () => <div>Loading...</div>;

  const renderError = () => (
    <p>{`Whoops, something went wrong! Error ${error}`}</p>
  );

  const renderPosts = () => (
    <PostContainer
      posts={posts.slice(0, 4)}
    />
  );

  if (loading) {
    return renderLoading();
  }
  if (posts.length > 0) {
    return renderPosts();
  }
  return renderError();
}
