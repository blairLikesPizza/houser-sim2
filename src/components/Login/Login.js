import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser, getUser } from '../../ducks/reducer.js';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        this.getUsername = this.getUsername.bind(this);
        this.getPassword = this.getPassword.bind(this);
    }

    createUser() {
        const reqBody = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.addUser(reqBody);
        console.log(reqBody)
    }

    loginUser(){
        const reqBody = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.getUser(reqBody, this.props.history);
        console.log(reqBody)
    }

    getUsername(value){
        console.log(value)
        this.setState({
            username: value
        })
    }
    
    getPassword(value){
        console.log(value)
        this.setState({
            password: value
        })
    }

    render() {
        return (
            <div className="login-root">
                <div className="login-container">
                    <div className="logo-container">
                         <img src="https://github.com/DevMountain/simulation-2/blob/master/assets/auth_logo.png?raw=true" alt=""/>
                    </div>
                    <div className="login-input-container">
                        <p>Username</p>
                        <input className="username-input" onChange={(e) => this.getUsername(e.target.value)}/>
                        <p>Password</p>
                        <input type="password" className="password-input" onChange={(e) => this.getPassword(e.target.value)}/>
                    </div>
                    <div className="login-buttons-container">
                          <button className="login-button" onClick={() => this.loginUser(this.state.username, this.state.password)}>Login</button> 
                        <Link to="/listings"><button className="register-button" onClick={() => this.createUser(this.state.username, this.state.password)}>Register</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { user } = state

    return {
        user
    }
}

export default connect(mapStateToProps, { addUser, getUser })(Login);