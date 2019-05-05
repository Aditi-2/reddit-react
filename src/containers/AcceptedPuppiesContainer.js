import { connect } from 'react-redux'
import AcceptedPuppies from '../components/AcceptedPuppies/AcceptedPuppies'
import { push } from 'connected-react-router'
import { fetchPosts, accept, reject } from '../store/actions/action'

export default connect(
  (state, ownProps) => {
      return { posts: state.reddit.accepted }
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
)(AcceptedPuppies)