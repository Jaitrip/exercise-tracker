import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      userID: this.props.userID
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
        <div className="container">
          <a className="navbar-brand" href="/#">
            Exercise Tracker
          </a>
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link className="nav-link" to={"/workout/" + this.state.userID}>
                  Workout
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/mainMeal/" + this.state.userID}
                >
                  Meals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/weekly/" + this.state.userID}>
                  Weekly
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to={"/account/" + this.state.userID}>
                  Account
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
