import { connect } from 'react-redux'
import Login from '../components/Login/Login'
import { login } from '../store/actions/action'
import { push } from 'connected-react-router'

const PASSWORD = "password"

export default connect(
  (state, ownProps) => {
    return state
  },
  dispatch => ({
    checkCredentials: (creds) => {
      if(creds.password === PASSWORD) {
        dispatch(login(creds))
        dispatch(push('/home'))
      }
      else {
        alert("Please enter correct credentials")
      }
    }
  })

)(Login)