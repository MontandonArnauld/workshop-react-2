import Biography from "./components/biography/biography";
import Navbar from "./components/header/Navbar";
import Teamlist from "./components/team/Teamlist";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Biography />
      <Teamlist />
    </div>
  );
}

export default App;
