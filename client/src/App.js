import "./App.css";
import LogoBar from "./components/LogoBar";
import EntryPoint from "./components/EntryPoint";
import EventsProvider from "./components/Events/EventsProvider";

function App() {
  return (
    <div>
      <LogoBar />
      <EntryPoint />
      <EventsProvider />
    </div>
  );
}

export default App;
