import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"

import Login from "./components/login.component"
import SignUp from "./components/signup.component"
import Weekly from "./components/weekly.component"
import Workout from "./components/workout.component"
// import Exercise from "./components/exercise.component"
import MainMeals from "./components/mainMeals.component"

function App() {
  return (
    <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/weekly" exact component={Weekly} />
          <Route path="/workout" exact component={Workout} />
          {/* <Route path="/exercise" exact component={Exercise} /> */}
          <Route path="/mainMeals" exact component={MainMeals} />
        </div>
    </Router>
  );
}
export default App;
