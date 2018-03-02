import React, { Component } from 'react';
import './StepFive.css';
import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateRecommendedRent } from '../../ducks/reducer.js';
import { updatePropName } from '../../ducks/reducer.js';
import { updatePropDescription } from '../../ducks/reducer.js';
import { updateAddressOne } from '../../ducks/reducer.js';
import { updateAddressTwo } from '../../ducks/reducer.js';
import { updateAddressThree } from '../../ducks/reducer.js';
import { updateAddressFour } from '../../ducks/reducer.js';
import { updateImgURL } from '../../ducks/reducer.js';
import { updateLoan } from '../../ducks/reducer.js';
import { updateMortgage } from '../../ducks/reducer.js';
import { updateDesiredRent } from '../../ducks/reducer.js';
import { addHouse } from '../../ducks/reducer.js';
import checkmark from '../StepTwo/noun_1259726_cc.svg';

class StepFive extends Component {

    componentDidMount() {
        this.updateRecommendedRent()
    }

    updateRecommendedRent() {
        const reqBody = {
            recommendedRent: (this.props.mortgage * 1) + (25 / 100) * (this.props.mortgage * 1)
        }
        console.log(reqBody)
    }

    createHouse() {
        const reqBody = {
            recommendedRent: (this.props.mortgage * 1) + (25 / 100) * (this.props.mortgage * 1),
            propName: this.props.propName,
            propDescription: this.props.propDescription,
            addressOne: this.props.addressOne,
            addressTwo: this.props.addressTwo,
            addressThree: this.props.addressThree,
            addressFour: this.props.addressFour,
            imgURL: this.props.imgURL,
            loan: this.props.loan,
            mortgage: this.props.mortgage,
            desiredRent: this.props.desiredRent,
            userid: this.props.userid
        }
        this.props.addHouse(reqBody);
        console.log(reqBody)
    }

    render() {
        const { updateDesiredRent } = this.props;
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
                    <div className="step-number-header">Step 5</div>
                    <div className="circle-container">
                        <div className="circle"><div className="circle-filled"><div className="checkmark"><img src={checkmark} alt="" /></div></div></div>
                        <div className="circle"><div className="circle-filled"><div className="checkmark"><img src={checkmark} alt="" /></div></div></div>
                        <div className="circle"><div className="circle-filled"><div className="checkmark"><img src={checkmark} alt="" /></div></div></div>
                        <div className="circle"><div className="circle-filled"><div className="checkmark"><img src={checkmark} alt="" /></div></div></div>
                        <div className="circle"><div className="circle-filled"></div></div>
                    </div>
                    <div className="recommendation">Recommended Rent ${(this.props.mortgage * 1) + (25 / 100) * (this.props.mortgage * 1)}</div>
                    <div className="step-details-container">
                        <div className="property-description">Desired Rent</div>
                        <input className="monthly-mortgage" onChange={(e) => updateDesiredRent(e.target.value)} />
                    </div>

                    <div className="previous-next-buttons">
                        <Link to="/step/4"><button className="previous-step-button">Previous Step</button></Link>
                        <Link to="/listings"><button className="complete-button" onClick={this.createHouse.bind(this)}>Complete</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    const { recommendedRent, propName, propDescription, addressOne, addressTwo, addressThree, addressFour, imgURL, loan, mortgage, desiredRent, house, userid } = state;

    return {
        recommendedRent,
        propName,
        propDescription,
        addressOne,
        addressTwo,
        addressThree,
        addressFour,
        imgURL,
        loan,
        mortgage,
        desiredRent,
        house,
        userid
    };
}

export default connect(mapStateToProps, { updateRecommendedRent, updatePropName, updatePropDescription, updateAddressOne, updateAddressTwo, updateAddressThree, updateAddressFour, updateImgURL, updateLoan, updateMortgage, updateDesiredRent, addHouse })(StepFive);