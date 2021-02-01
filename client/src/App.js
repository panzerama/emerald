import "./App.css";
import LogoBar from "./components/LogoBar";
import EntryPoint from "./components/EntryPoint";
import EventsProvider from "./components/Events/EventsProvider";

function App() {
  return (
    <div>
      <LogoBar />
      <EntryPoint />
      {/** we encapsulate all of the event related logic in one component */}
      <EventsProvider />
      {/** workitem add posts/articles provider */}
    </div>
  );
}

export default App;
