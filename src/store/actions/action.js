import * as types from './ActionTypes'

export const login = (credentials) => ({
  credentials,
  type: types.LOGIN
})

export const requestPosts = (subreddit) => {
  return {
    type: types.REQUEST_POSTS,
    subreddit
  }
}

export const receivePosts = (subreddit, json) => {
  return {
    type: types.RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const fetchPosts =(subreddit) => {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

export const accept = (item) => {
  return {
    type: types.ACCEPT,
    item
  }
}

export const reject = (item) => {
  return {
    type: types.REJECT,
    item
  }
}