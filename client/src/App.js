import React from 'react';
import LogoBar from "./components/LogoBar";
import EntryPoint from "./components/EntryPoint";
import EventsProvider from "./components/Events/EventsProvider";
import PostsProvider from "./components/Posts/PostsProvider";

function App() {
  return (
    <React.Fragment>
      <LogoBar />
      <EntryPoint />
      {/** we encapsulate all of the event related logic in one component */}
      <EventsProvider />
      <PostsProvider />
    </React.Fragment>
  );
}

export default App;
