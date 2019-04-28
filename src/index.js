import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store/configureStore'
import './index.css'
import App from './App'
import { register } from './registerServiceWorker'

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
register()
