import React, { Component } from "react";
import Navbar from "./layout/Navbar";

export default class Weekly extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ""
    };
    //recieves data from API Call via to feed into Chart
  }

  render() {
    return (

      <div>
          <Navbar />
          <div className="jumbotron jumbotron-fluid py-2">
            <div className="container">
              <h1 className="display-4">Weekly Overview</h1>
              <p className="lead">
                This is a modified jumbotron that occupies the entire horizontal
                space of its parent.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
            
            </div>
          </div>
          </div>
    );
  }
}