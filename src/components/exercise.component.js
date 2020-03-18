import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import "../index.css";

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
        <body id="main-page">
          <Navbar />
          <div className="jumbotron jumbotron-fluid py-2">
            <div className="container">
              <h1 className="display-4">Exercise</h1>
            </div>
          </div>
          <div className="container">
            <div className="row">
            
            </div>
          </div>
        </body>
      </div>
    );
  }
}
