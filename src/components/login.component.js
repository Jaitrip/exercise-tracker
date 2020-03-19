import React, { Component } from 'react';
import axios from 'axios';
import '../Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.onLoginSubmit = this.onLoginSubmit.bind(this)
    }


    onSubmit(e) {
        e.preventDefault();
        window.location = '/signup';
    }

    handleUsernameChange(event) {
        this.setState({
            username : event.target.value
        })
        event.preventDefault();
    }

    handlePasswordChange(event) {
        this.setState({
            password : event.target.value
        })
        event.preventDefault();
    }

    onLoginSubmit(event) {
        axios.get("http://localhost:5000/user/getPassword/" + this.state.username)
        .then(response => {
            const actualPassword = response.data[0].password
            if (actualPassword === this.state.password) {
                window.location = "/weekly"
            } else {
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
            <div>
                <body id="login-page">
                    <div className="signin">
                        <form onSubmit={this.onLoginSubmit}>
                            <h2>Exercise Tracker</h2>
                            <input type="text" placeholder="Enter Username" value={this.state.username} onChange={this.handleUsernameChange}></input>
                            <input type="password" placeholder="Enter Password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                            <input type="submit" value="Log In"></input>
                        </form>

                        <form onSubmit={this.onSubmit}>
                            <input type="submit" value="Sign up"></input>
                        </form>
                    </div>
                </body>
            </div>
        )
    }
}