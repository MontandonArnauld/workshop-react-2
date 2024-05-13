import Navbar from "./components/header/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/biographie">Biography</Link>
        <Link to="/equipe">Team</Link>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
