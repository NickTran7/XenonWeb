import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./Home";

// import Create from "./Path/Create";

import Resume from "./Path/Resume";

import Project from "./Path/Project";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/resume">
            <Resume />
          </Route>

          <Route path="/project">
            <Project />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
