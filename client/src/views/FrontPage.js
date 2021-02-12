import React from 'react';

import YourPath from "../components/YourPath";
import EventsProvider from "../components/Events/EventsProvider";
import PostsProvider from "../components/Posts/PostsProvider";

export default function FrontPage() {
  return (
    <>
      <YourPath />
      <EventsProvider />
      <PostsProvider />
    </>
  )
}