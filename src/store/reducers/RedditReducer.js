import * as types from '../actions/ActionTypes'

// set initial values
const initialState = {
  isFetching: false,
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /**
     * dispatched when fetch request is invoked
     */
    case types.REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
      /**
       * invoked when fetch request is resolved
       */
    case types.RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default reducer