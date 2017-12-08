import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header-root">
                <div className="header-content-container">
                    <div className="header-logo-container">
                    <img className="logo" src="https://github.com/DevMountain/simulation-2/blob/master/assets/header_logo.png?raw=true" alt="" />
                        <p className="houser-word">Houser</p>
                        <p className="dashboard-word">Dashboard</p>
                    </div>
                    <div className="logout-header">
                       <Link to="/"><p>Logout</p></Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default Header;