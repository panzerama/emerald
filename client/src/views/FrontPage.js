import React from 'react';

import EntryPoint from "../components/EntryPoint";
import EventsProvider from "../components/Events/EventsProvider";
import PostsProvider from "../components/Posts/PostsProvider";

export default function FrontPage() {
  return (
    <>
      <EntryPoint />
      <EventsProvider />
      <PostsProvider />
    </>
  )
}