import React, { Component } from 'react';
import './StepTwo.css';
import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateAddressOne, updateAddressTwo, updateAddressThree, updateAddressFour } from '../../ducks/reducer.js';
import checkmark from './noun_1259726_cc.svg';

class StepTwo extends Component {
    render() {
        const { updateAddressOne, updateAddressTwo, updateAddressThree, updateAddressFour } = this.props;
        return (
            <div className="step-root">
                <Header />
                <div className="step-container">
                    <div className="step-header-cancel">
                        <div className="step-header">Add new listing</div>
                        <div className="step-cancel-button-container">
                            <Link to="/listings"><button className="step-cancel-button">Cancel</button></Link>
                        </div>
                    </div>
                    <div className="step-number-header">Step 2</div>
                    <div className="circle-container">
                        <div className="circle"><div className="circle-filled"><div className="checkmark"><img src={checkmark} alt=""/></div></div></div>
                        <div className="circle"><div className="circle-filled"></div></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="step-two-input-container">
                        <div className="address">Address</div>
                        <input className="address-input" onChange={(e) => updateAddressOne(e.target.value)}/>
                        <div className="city-state-input">
                            <div className="city-container">
                            <div className="city">City</div>
                            <input className="city-input" onChange={(e) => updateAddressTwo(e.target.value)}/>
                            </div>
                            <div className="state-container">
                            <div className="state">State</div>
                            <input className="state-input" onChange={(e) => updateAddressThree(e.target.value)}/>
                            </div>
                        </div>
                        <div className="zip">Zip</div>
                        <input className="zip-input" onChange={(e) => updateAddressFour(e.target.value)}/>
                    </div>
                    <div className="previous-next-buttons">
                        <Link to="/step/1"><button className="previous-step-button">Previous Step</button></Link>
                        <Link to="/step/3"><button className="next-step-button" onClick={console.log(this.props.addressOne)}>Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ){
    const { addressOne, addressTwo, addressThree, addressFour } = state;

    return {
        addressOne,
        addressTwo,
        addressThree,
        addressFour
    }
}

export default connect(mapStateToProps, { updateAddressOne, updateAddressTwo, updateAddressThree, updateAddressFour })(StepTwo);