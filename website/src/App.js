import "./App.css";
import NabBar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NabBar />
    </Router>
  );
}

export default App;
