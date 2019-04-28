import { connect } from 'react-redux'
import Puppies from '../components/Puppies/Puppies'
import { push } from 'connected-react-router'
import { fetchPosts } from '../store/actions/action'

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
    }
  })
)(Puppies)