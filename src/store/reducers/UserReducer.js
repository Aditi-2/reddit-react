import * as types from '../actions/ActionTypes'

// set initial values
const initialState = {
    username: '',
    loggedIn: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                username: action.credentials.username, //username from entered values
                loggedIn: true //when user is logged in set it true
            }
        default:
            return state //return default state
    }
}

export default reducer