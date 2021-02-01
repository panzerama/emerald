import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PostContainer from './PostContainer';

export default function PostsProvider(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    console.log('[PostsProvider] useEffect call');
    const requestConfig = {
      url: 'http://localhost:4000/v1/posts',
      method: 'get',
      headers: { "Content-Type": "application/json" },
    }

    axios(requestConfig)
      .then((response) => {
      console.log(response)
      setPosts(response.data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
    })
  }, []);

  const renderLoading = () => {
    return <div>Loading...</div>
  }

  const renderError = () => {
    return <p>{`Whoops, something went wrong! Error ${error}`}</p>
  }

  const renderPosts = () => {
    return <PostContainer posts={posts.slice(0,4)} />
  }
  
  if (loading) {
    return renderLoading();
  } else if (posts.length > 0) {
    return renderPosts();
  } else {
    return renderError();
  }
}