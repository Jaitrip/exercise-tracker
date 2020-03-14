import React, { Component } from 'react';
import '../Login.css';

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }


    onSubmit(e) {
        e.preventDefault();

        // TODO CODE

        window.location = '/signup';
    }

    render() {
        return (
            <div>
                <div className="signin">
                    <form>
                        <h2>Exercise Tracker</h2>
                        <input type="text" placeholder="Enter Username"></input>
                        <input type="password" placeholder="Enter Password"></input>
                        <input type="submit" value="Log In"></input>
                    </form>

                    <form onSubmit={this.onSubmit}>
                        <input type="submit" value="Sign up"></input>
                    </form>
                </div>
            </div>
        )
    }
}