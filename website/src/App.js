import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NabBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Sidebar />
      <NabBar />
    </Router>
  );
}

export default App;
