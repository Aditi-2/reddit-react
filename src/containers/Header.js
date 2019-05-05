import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import { push } from 'connected-react-router'

export default connect(
  (state, ownProps) => {
    return { posts: state.reddit, user: state.user }
  },
  dispatch => ({
    redirectToHome: () => {
      dispatch(push('/'))
    }
  })
)(Header)