
import Biography from "./components/biography/biography";
import Navbar from "./components/header/Navbar";
import Teamlist from "./components/team/Teamlist";
import "./App.css";
import Footer from './components/Footer/Footer'



function App() {
  return (
    <div>
      <Navbar />
      <Biography />
      <Teamlist />
    <Footer />
    </div>
  );
}

export default App;
