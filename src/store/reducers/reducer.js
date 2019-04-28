import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import UserReducer from './UserReducer'
import RedditReducer from './RedditReducer'
import { createForms } from 'react-redux-form'

const userForm = {
  username: '',
  password: ''
}

export default (history) => combineReducers({
  ...createForms({
    credentials: userForm
  }),
  router: connectRouter(history),
  user: UserReducer,
  reddit: RedditReducer
})