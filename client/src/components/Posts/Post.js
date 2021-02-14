import React from 'react';

export default function Post({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <hr />
      <h5>{post.author}</h5>
      <hr />
      <p>
        {post.body}
      </p>
    </div>
  );
}
