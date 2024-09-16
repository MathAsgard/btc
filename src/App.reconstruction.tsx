import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Reconstruction from "./pages/Reconstruction";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  document.title = "iBetcrypto [CLOSED FOR RECONSTRUCTION]";
  var NotFound = Reconstruction;

  return (
    <Router>
      <div className="middlesec">
        <Switch>
          <Route exact path="/" component={Reconstruction} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
