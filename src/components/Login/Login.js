import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className="login-root">
                <div className="login-container">
                    <div className="logo-container">
                         <img src="https://github.com/DevMountain/simulation-2/blob/master/assets/auth_logo.png?raw=true" alt=""/>
                    </div>
                    <div className="login-input-container">
                        <p>Username</p>
                        <input className="username-input" />
                        <p>Password</p>
                        <input type="password" className="password-input" />
                    </div>
                    <div className="login-buttons-container">
                        <Link to="/listings"><button className="login-button">Login</button></Link>
                        <Link to="/listings"><button className="register-button">Register</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;