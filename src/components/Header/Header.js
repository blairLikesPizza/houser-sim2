import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { resetUserId } from '../../ducks/reducer.js';
import { connect } from 'react-redux';

class Header extends Component {

signout(){
    this.props.resetUserId()
    axios.post('/api/signout')
       .then(res => {
          return res
       })
}

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
                       <Link to="/"><p onClick={this.signout.bind(this)}>Logout</p></Link>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    const { userid } = state
    return {
        userid
    }
}

export default connect(mapStateToProps, { resetUserId })(Header);