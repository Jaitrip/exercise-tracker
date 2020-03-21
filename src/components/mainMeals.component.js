import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import "../index.css";

export default class mainMeals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseName: "",
      duration: 0,
      caloriesBurned: 0
    };
    //recieves data from API Call via to feed into Chart
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1 className="display-4">Meal Plans</h1>
            <p className="lead">Select from the options below</p>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              https://getbootstrap.com/docs/4.0/utilities/spacing/
            </div>
            <div class="col-md-auto">
              this is for spacing and wrapping p is padding, it has different
              sides and sizes similar to wrapping. Check code on how i used it
              for the buttons.
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-md-center py-3">
            <div class="col-md-auto">
              This is a completely new row with x and y padding of size 3
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-md-center py-3">
            <div class="col-md-auto">
              If you want to play around with different grid sizes :
              https://getbootstrap.com/docs/4.0/layout/grid/ for button styles,
              just google bootstrap buttons
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              <button
                type="button"
                class="btn btn-light btn-outline-dark btn-lg btn-block py-3 px-5 my-1"
              >
                Create a Meal
              </button>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              <button
                type="button"
                class="btn btn-light btn-outline-dark btn-lg btn-block py-3 px-5 my-1"
              >
                View Meal Plans
              </button>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              <button
                type="button"
                class="btn btn-light btn-outline-dark btn-lg btn-block py-3 px-5 my-1"
                data-toggle="modal"
                data-target="#basicExampleModal"
              >
                Create a Meal (this opens up a Modal, in which the user can
                input data)
              </button>

              <div
                class="modal fade"
                id="basicExampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Create a Meal Plan
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div className="jumbotron jumbotron-fluid py-2">
                        <div className="container">
                          <p className="lead">Fill in these fields below</p>
                        </div>
                      </div>
                      ...
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save Meal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
