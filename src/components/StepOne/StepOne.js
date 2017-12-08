import React, { Component } from 'react';
import './StepOne.css';
import Header from '../Header/Header.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updatePropName, updatePropDescription } from '../../ducks/reducer.js';

class StepOne extends Component {
    render() {
        const { updatePropName, updatePropDescription } = this.props;
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
                    <div className="step-number-header">Step 1</div>
                    <div className="circle-container">
                        <div className="circle"><div className="circle-filled"></div></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="step-details-container">
                        <div className="property-name">Property Name</div>
                        <input className="prop-name-input" type="text" onChange={ (e) => updatePropName(e.target.value) }/>
                        <div className="property-description">Property Description</div>
                        <textarea className="prop-description-input" type="text" onChange={ (e) => updatePropDescription(e.target.value) }></textarea>
                    </div>

                    <Link to="/step/2"><button className="next-step-button" onClick={console.log(this.props.propName)}>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ){
    const { propName, propDescription } = state;

    return {
        propName,
        propDescription
    }
}

export default connect(mapStateToProps, { updatePropName, updatePropDescription})(StepOne);