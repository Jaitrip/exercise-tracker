import React, { Component } from 'react';
import '../Login.css';

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            age: 0,
            weight: 0,
            weightGoal: 0
        }
    }

    onSubmit(e) {
        e.preventDefault();

        // TODO CODE

        console.log("User created successfully!")
        window.location = '/';
    }

    render() {
        return (
            <div>
                <body id="login-page">
                    <div className="signin">
                        <form onSubmit={this.onSubmit}>
                            <h2>Exercise Tracker</h2>
                            <input type="text" required placeholder="Username"></input>
                            <input type="password" required placeholder="New Password"></input>
                            <input type="password" required placeholder="Confirm Password"></input>
                            <input type="text2" required placeholder="Age"></input>
                            <input type="text2" required placeholder="Weight"></input>
                            <input type="text2" required placeholder="Weight Goal"></input>
                            <input type="submit" value="Create New User"></input>
                        </form>
                    </div>
                </body>
            </div>
        )
    }
}