import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SinginPage from "./pages/singin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sign-in" component={SinginPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
