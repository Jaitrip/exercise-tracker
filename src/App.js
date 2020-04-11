import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

//load all components
import Login from "./components/login.component"
import SignUp from "./components/signup.component"
import Weekly from "./components/weekly.component"
import Workout from "./components/workout.component"
import AddWorkout from "./components/create-workout.component"
import ViewWorkout from "./components/view-workout.component"
import MainMeal from "./components/mainMeal.component"
import CreateMeal from './components/create-meal.component';
import ViewMeal from './components/view-meal.component';
import UserAccount from './components/user-account.component';

function App() {
  //set up all routes
  return (
    <Router>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/weekly/:id" exact component={Weekly} />
        <Route path="/workout/:id" exact component={Workout} />
        <Route path="/workout/createWorkout/:id" exact component={AddWorkout} />
        <Route path="/workout/viewWorkout/:id" exact component={ViewWorkout} />
        <Route path="/mainMeal/:id" exact component={MainMeal} />
        <Route path="/createMeal/:id" exact component={CreateMeal} />
        <Route path="/viewMeal/:id" exact component={ViewMeal} />
        <Route path="/account/:id" exact component={UserAccount} />
      </div>
    </Router>
  );
}
export default App;
