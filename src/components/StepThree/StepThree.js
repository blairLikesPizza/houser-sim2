import React, { Component } from 'react';
import './StepThree.css';
import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImgURL } from '../../ducks/reducer.js';
import checkmark from '../StepTwo/noun_1259726_cc.svg';

class StepThree extends Component {
    render(){
        const { updateImgURL } = this.props;
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
                    <div className="step-number-header">Step 3</div>
                    <div className="circle-container">
                        <div className="circle"><div className="circle-filled"><div className="checkmark"><img src={checkmark} alt=""/></div></div></div>
                        <div className="circle"><div className="circle-filled"><div className="checkmark"><img src={checkmark} alt=""/></div></div></div>
                        <div className="circle"><div className="circle-filled"></div></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="step-details-container">
                        <div className="preview-box">Preview</div>
                        
                        <div className="image-url">Image URL</div>
                        <input className="image-input" onChange={(e) => updateImgURL(e.target.value)}/>
                    </div>

                    <div className="previous-next-buttons">
                        <Link to="/step/2"><button className="previous-step-button">Previous Step</button></Link>
                        <Link to="/step/4"><button className="next-step-button" onClick={console.log(this.props.imgURL)}>Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ){
    const { imgURL } = state;

    return {
        imgURL
    };
}

export default connect(mapStateToProps, { updateImgURL })(StepThree);