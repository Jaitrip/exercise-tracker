import React, { Component } from 'react';
import axios from 'axios'
import '../style.css';

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            password: '',
            confirmPassword: '',
            age: '',
            weight: '',
            weightGoal: ''
        }

        //bind methods to object
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e) {
        //if the password and confirmation password are the same
        if (this.state.password === this.state.confirmPassword) {
            //add user to the database
            axios.post(
                "http://localhost:5000/user/addNewUser", 
                {
                    user_id: this.state.username,
                    password: this.state.password,
                    name : this.state.name,
                    age: this.state.age,
                    weight: this.state.weight,
                    weight_goal: this.state.weightGoal
                }
            )
            .then(response => {
                console.log(response)
                console.log("User created successfully!")
                //take user to the login page
                window.location = '/';
            })
            .catch(error => {
                console.log(error)
                window.location = '/signup';
            })
        } else {
            window.location = '/signup';
        }
        e.preventDefault();
    }

    //save input changes to state
    handleChange(event) {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
                <div id="login-page">
                    <div className="signin">
                        <form onSubmit={this.onSubmit}>
                            <h2>Exercise Tracker</h2>
                            <input 
                                type="text"
                                name="username"
                                required 
                                placeholder="Username"
                                value={this.state.username} 
                                onChange={this.handleChange}
                                autoComplete="off"
                            />
                            <input 
                                type="text"
                                name="name"
                                required 
                                placeholder="Name"
                                value={this.state.name} 
                                onChange={this.handleChange}
                                autoComplete="off"
                            />
                            <input 
                                type="password" 
                                name="password"
                                required 
                                placeholder="New Password"
                                value={this.state.password} 
                                onChange={this.handleChange}
                            />
                            <input 
                                type="password"
                                name="confirmPassword" 
                                required 
                                placeholder="Confirm Password"
                                value={this.state.confirmPassword} 
                                onChange={this.handleChange}
                            />
                            <input 
                                type="text2" 
                                name="age"
                                required 
                                placeholder="Age"
                                value={this.state.age} 
                                onChange={this.handleChange}
                                autoComplete="off"
                            />
                            <input 
                                type="text2"
                                name="weight" 
                                required 
                                placeholder="Weight"
                                value={this.state.weight} 
                                onChange={this.handleChange}
                                autoComplete="off"
                            />
                            <input 
                                type="text2"
                                name="weightGoal" 
                                required 
                                placeholder="Weight Goal"
                                value={this.state.weightGoal} 
                                onChange={this.handleChange}
                                autoComplete="off"
                            />
                            <input 
                                type="submit" 
                                value="Create New User"
                            />
                        </form>
                    </div>
                </div>
        )
    }
}