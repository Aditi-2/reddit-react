import * as types from '../actions/ActionTypes'

// set initial values
const initialState = {
  isFetching: false,
  items: [],
  accepted: [],
  rejected: []
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
      /**
       * added item to the accepted list
       */
    case types.ACCEPT:
    const index = state.items.indexOf(action.item)
      const allItems = state.items
      if (index !== -1)
      allItems.splice(index, 1)
      const accepted = [...state.accepted, action.item]
      return Object.assign({},state,{
        accepted,
        items: allItems
      })
      /**
       * added items to rejected list
       */
    case types.REJECT:
      const itemIndex = state.items.indexOf(action.item)
      const items = state.items
      if (itemIndex !== -1)
        items.splice(itemIndex, 1)
      const rejected = [...state.rejected, action.item]
      return Object.assign({},state,{
        rejected,
        items
      }) 
    default:
      return state
  }
}

export default reducer