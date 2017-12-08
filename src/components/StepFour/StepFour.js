import React, { Component } from 'react';
import './StepFour.css';
import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateLoan, updateMortgage, updateRecommendedRent } from '../../ducks/reducer.js';
import checkmark from '../StepTwo/noun_1259726_cc.svg';

class StepFour extends Component {
    render(){
        const { updateLoan, updateMortgage } = this.props;
        return(
            <div className="step-root">
                <Header />
                <div className="step-container">
                    <div className="step-header-cancel">
                        <div className="step-header">Add new listing</div>
                        <div className="step-cancel-button-container">
                            <Link to="/listings"><button className="step-cancel-button">Cancel</button></Link>
                        </div>
                    </div>
                    <div className="step-number-header">Step 4</div>
                    <div className="circle-container">
                        <div className="circle"><div className="circle-filled"><div className="checkmark"><img src={checkmark} alt=""/></div></div></div>
                        <div className="circle"><div className="circle-filled"><div className="checkmark"><img src={checkmark} alt=""/></div></div></div>
                        <div className="circle"><div className="circle-filled"><div className="checkmark"><img src={checkmark} alt=""/></div></div></div>
                        <div className="circle"><div className="circle-filled"></div></div>
                        <div className="circle"></div>
                    </div>
                    <div className="step-details-container">
                        <div className="property-name">Loan Amount</div>
                        <input className="prop-name-input" onChange={(e) => updateLoan(e.target.value)}/>
                        <div className="property-description">Monthly Mortgage</div>
                        <input className="monthly-mortgage" onChange={(e) => updateMortgage(e.target.value)}/>
                    </div>

                    <div className="previous-next-buttons">
                        <Link to="/step/3"><button className="previous-step-button">Previous Step</button></Link>
                        <Link to="/step/5"><button className="next-step-button" onClick={console.log(this.props.loan)}>Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ){
    const { loan, mortgage, recommendedRent } = state;

    return {
        loan, 
        mortgage,
        recommendedRent
    };
}

export default connect(mapStateToProps, { updateLoan, updateMortgage, updateRecommendedRent })(StepFour);