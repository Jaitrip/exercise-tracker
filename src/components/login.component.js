import React, { Component } from 'react';
import axios from 'axios';
import '../style.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onLoginSubmit = this.onLoginSubmit.bind(this)
    }

    //if signup button is pressed, take user to sign up page
    onSubmit(e) {
        e.preventDefault();
        window.location = '/signup';
    }

    //save input changes to state
    handleChange(event) {
        const value = event.target.value
        const name = event.target.name

        this.setState({
            [name]: value
        })
    }

    //when user presses login get the password
    onLoginSubmit(event) {
        axios.get("http://localhost:5000/user/getPassword/" + this.state.username)
            .then(response => {
                const actualPassword = response.data[0].password
                //check if entered password matches actual password
                if (actualPassword === this.state.password) {
                    //if password correct, take user to the homepage
                    window.location = "/weekly/" + this.state.username
                } else {
                    //if incorrect then take user back to login page
                    window.location = "/"
                }
            })
            .catch(error => {
                console.log(error)
                window.location = "/"
            })
            
        event.preventDefault();
    }

    render() {
        return (
            <div id="login-page">
                <div className="signin">
                    <form onSubmit={this.onLoginSubmit}>
                        <h2>Exercise Tracker</h2>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            autoComplete="off"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <input
                            type="submit"
                            value="Log In"
                        />
                    </form>

                    <form onSubmit={this.onSubmit}>
                        <input type="submit" value="Sign up" />
                    </form>
                </div>
            </div>
        )
    }
}