import { connect } from 'react-redux'
import Puppies from '../components/Puppies/Puppies'
import { push } from 'connected-react-router'
import { fetchPosts, accept, reject } from '../store/actions/action'

export default connect(
  (state, ownProps) => {
    return { posts: state.reddit, user: state.user }
  },
  dispatch => ({
    redirectToHome: () => {
      dispatch(push('/'))
    },
    fetchData: () => {
      dispatch(fetchPosts('aww'))
    },
    accept: (item) => {
      dispatch(accept(item))
    },
    reject: (item) => {
      dispatch(reject(item))
    }
  })
)(Puppies)