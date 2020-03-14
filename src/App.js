import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login.component"
import SignUp from "./components/signup.component"

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </div>
    </Router>

  );
}

export default App;
