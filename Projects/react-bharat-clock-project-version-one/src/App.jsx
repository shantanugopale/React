import Heading from "./components/Heading";
import "./App.css";
import ClockSlogan from "./components/ClockSlogan";
import ClockTime from "./components/ClockTime";

function App() {
  return (
    <div className="container text-center">
      <Heading />
      <ClockSlogan />
      <ClockTime />
    </div>
  );
}

export default App;
