import React, { Component } from 'react';
import './Listings.css';
import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHouses, deleteHouse, filterHouses } from '../../ducks/reducer.js';
import xbutton from './001-letter-x.svg';

class Listings extends Component {
    constructor(props){
        super(props);

        this.state = {
            userDesiredRent: 0
        }
        this.resetListings = this.resetListings.bind(this)
    }

    componentDidMount() {
        const { getHouses } = this.props;
        getHouses()
    }

    getUserDesiredRent(value){
        console.log(value)
        this.setState({
            userDesiredRent: value
        })
    }

    resetListings(){
        this.setState({
            userDesiredRent: 0
        })
    }


    render() {
        const houses = this.state.userDesiredRent ? this.props.filteredHouses : this.props.houses
        
        
        return (
            <div>
                <Header />
                <div className="listings-root">

                    <div className="listings-container">
                        <div className="listings-control-box">
                            <div className="add-property-button">
                                <Link to="/step/1"><button>Add new property</button></Link>
                            </div>
                            <div className="filter-container">
                                <div className="filter-words">List properties with "desired rent" greater than: $</div>
                                <div><input className="filter-price-input" placeholder="0" onChange={(e) => this.getUserDesiredRent(e.target.value)}/></div>
                                <div className="filter-buttons-container">
                                    <button className="filter-button" onClick={() => this.props.filterHouses(this.state.userDesiredRent)}>Filter</button>
                                    <button className="reset-button" onClick={this.resetListings}>Reset</button>
                                </div>
                            </div>
                        </div>
                        <div className="listings-list-container">
                            <div className="listings-list-header">Home Listings</div>
                            {console.log(houses)}
                        
                           {houses.map((element, i) => {
                               return <div className="listing-tile"key={i}>
                                <div className="listing-tile-image">
                                    <p>{element.id ? <img src={element.imgurl} alt="" /> : null}</p>
                                </div>
                                    <div className="listing-tile-description">
                                        <div className="listing-name">{element.id ? element.propname : null}</div>
                                        <div className="listing-description">{element.id ? element.propdescription : null}</div>
                                    </div>
                                    <div className="listing-tile-details">
                                        <div className="listing-detail">Loan: ${element.id ? element.loan : null}</div>
                                        <div className="listing-detail">Monthly Mortgage: ${element.id ? element.mortgage : null}</div>
                                        <div className="listing-detail">Recommended Rent: ${element.id ? element.recommendedrent : null}</div>
                                        <div className="listing-detail">Desired Rent: ${element.id ? element.desiredrent : null}</div>
                                        <div className="listing-detail">Address: {element.id ? element.addressone : null}</div>
                                        <div className="listing-detail">City: {element.id ? element.addresstwo : null}</div>
                                        <div className="listing-detail">State: {element.id ? element.addressthree : null}</div>
                                        <div className="listing-detail">Zip: {element.id ? element.addressfour : null}</div>
                                    </div>
                                    <div className="x-button-container" onClick={() => this.props.deleteHouse(element.id)}>
                                    <img className="x-button" src={xbutton} alt=""/>
                                </div>
                                    </div>
                           })}
                            
                           
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { houses, house, filteredHouses } = state;


    return {
        houses,
        house,
        filteredHouses
    }
}

export default connect(mapStateToProps, { getHouses, deleteHouse, filterHouses })(Listings);