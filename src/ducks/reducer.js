import axios from 'axios';

const initialState = {
    houses: [],
    house: {},
    filteredHouses: [],
    user: {},
    recommendedRent: 0,
    propName: '',
    propDescription: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    addressFour: '',
    imgURL: '',
    loan: 0,
    mortgage: 0,
    desiredRent: 0,
    userDesiredRent: 0,
    listings: [],
    username: '',
    password: '',
    newName: '',
    newPassword: ''
}

const UPDATE_RECOMMENDED_RENT = "UPDATE_RECOMMENDED_RENT";
const UPDATE_PROP_NAME = "UPDATE_PROP_NAME";
const UPDATE_PROP_DESCRIPTION = "UPDATE_PROP_DESCRIPTION";
const UPDATE_ADDRESS_ONE = "UPDATE_ADDRESS_ONE";
const UPDATE_ADDRESS_TWO = "UPDATE_ADDRESS_TWO";
const UPDATE_ADDRESS_THREE = "UPDATE_ADDRESS_THREE";
const UPDATE_ADDRESS_FOUR = "UPDATE_ADDRESS_FOUR";
const UPDATE_IMG_URL = "UPDATE_IMG_URL";
const UPDATE_LOAN = "UPDATE_LOAN";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_DESIRED_RENT = "UPDATE_DESIRED_RENT";
const UPDATE_LISTINGS = "UPDATE_LISTINGS";
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_NEW_NAME = "UPDATE_NEW_NAME";
const UPDATE_NEW_PASSWORD = "UPDATE_NEW_PASSWORD";
const GET_HOUSES = "GET_HOUSES";
const DELETE_HOUSE = "DELETE_HOUSE";
const ADD_HOUSE = "ADD_HOUSE";
const FILTER_HOUSES = "FILTER_HOUSES";

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_RECOMMENDED_RENT: 
            return Object.assign({}, state, { recommendedRent: action.payload })
        case UPDATE_PROP_NAME: 
            return Object.assign({}, state, { propName: action.payload })
        case UPDATE_PROP_DESCRIPTION: 
            return Object.assign({}, state, { propDescription: action.payload })
        case UPDATE_ADDRESS_ONE: 
            return Object.assign({}, state, { addressOne: action.payload })
        case UPDATE_ADDRESS_TWO: 
            return Object.assign({}, state, { addressTwo: action.payload })
        case UPDATE_ADDRESS_THREE: 
            return Object.assign({}, state, { addressThree: action.payload })
        case UPDATE_ADDRESS_FOUR: 
            return Object.assign({}, state, { addressFour: action.payload })
        case UPDATE_IMG_URL: 
            return Object.assign({}, state, { imgURL: action.payload })
        case UPDATE_LOAN: 
            return Object.assign({}, state, { loan: action.payload })
        case UPDATE_MORTGAGE: 
            return Object.assign({}, state, { mortgage: action.payload })
        case UPDATE_DESIRED_RENT: 
            return Object.assign({}, state, { desiredRent: action.payload })
        case UPDATE_LISTINGS: 
            return Object.assign({}, state, { listings: action.payload })
        case UPDATE_USERNAME: 
            return Object.assign({}, state, { username: action.payload })
        case UPDATE_PASSWORD: 
            return Object.assign({}, state, { password: action.payload })
        case UPDATE_NEW_NAME: 
            return Object.assign({}, state, { newName: action.payload })
        case UPDATE_NEW_PASSWORD: 
            return Object.assign({}, state, { newPassword: action.payload })
        case GET_HOUSES + '_FULFILLED':
            return Object.assign({}, state, { houses: action.payload })
        case DELETE_HOUSE:
            return Object.assign({}, state, { house: action.payload })
        case ADD_HOUSE:
            return Object.assign({}, state, { house: action.payload })
        case FILTER_HOUSES + '_FULFILLED':
            return Object.assign({}, state, { filteredHouses: action.payload.data })
        default: return state;
    }
}

export function updateRecommendedRent(recommendedRent) {
    console.log(recommendedRent)
    return {
        type: UPDATE_RECOMMENDED_RENT,
        payload: recommendedRent
    }
}

export function updatePropName(propName) {
    return {
        type: UPDATE_PROP_NAME,
        payload: propName
    }
}

export function updatePropDescription(propDescription) {
    return {
        type: UPDATE_PROP_DESCRIPTION,
        payload: propDescription
    }
}

export function updateAddressOne(addressOne) {
    return {
        type: UPDATE_ADDRESS_ONE,
        payload: addressOne
    }
}

export function updateAddressTwo(addressTwo) {
    return {
        type: UPDATE_ADDRESS_TWO,
        payload: addressTwo
    }
}

export function updateAddressThree(addressThree) {
    return {
        type: UPDATE_ADDRESS_THREE,
        payload: addressThree
    }
}

export function updateAddressFour(addressFour) {
    return {
        type: UPDATE_ADDRESS_FOUR,
        payload: addressFour
    }
}

export function updateImgURL(imgURL) {
    return {
        type: UPDATE_IMG_URL,
        payload: imgURL
    }
}

export function updateLoan(loan) {
    return {
        type: UPDATE_LOAN,
        payload: loan 
    }
}

export function updateMortgage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateDesiredRent(desiredRent) {
    return {
        type: UPDATE_DESIRED_RENT,
        payload: desiredRent
    }
}

export function updateListings(listings) {
    return {
        type: UPDATE_LISTINGS,
        payload: listings
    }
}

export function loginName( username ){
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}

export function loginPassword( password ){
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export function registerName( newName ){
    return {
        type: UPDATE_NEW_NAME,
        payload: newName
    }
}

export function registerPassword( newPassword ){
    return {
        type: UPDATE_NEW_PASSWORD,
        payload: newPassword
    }
}

export function getHouses(){
    const houseData = axios.get('/api/houses')
        .then(res => {
            return res.data
        })
    return {
        type: GET_HOUSES,
        payload: houseData
    }
}

export function deleteHouse(id){
    console.log('deleting house', id)
    const deletedHouseData = axios.delete('/api/house/' + id) 
        .then(res => {
            return res.data
        })
    return {
        type: DELETE_HOUSE,
        payload: deletedHouseData
    }
}

export function addHouse(reqBody){
    console.log('a string')
    const newHouseData = axios.post('/api/addhouse', reqBody)
        .then(res => {
            return res.data
        })
    // console.log(newHouseData)
    return {
        type: ADD_HOUSE,
        payload: newHouseData
    }
}

export function filterHouses(desiredRent){
    console.log('filtering houses')
    const filteredHouses = axios.get('/api/filteredhouses/' + desiredRent)
    // console.log(filteredHouses)
    return {
        type: FILTER_HOUSES,
        payload: filteredHouses
    }
}


export default reducer;