import React from 'react'
import { Route } from 'react-router-dom'
import LoginContainer from './containers/LoginContainer'
import Puppies from './containers/PuppiesContainer' //change to container
import AcceptedPuppies from './containers/AcceptedPuppiesContainer'
import Header from './containers/Header'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Route exact path="/" component={LoginContainer} /> 
      <Route exact path="/home" component={Puppies} />
      <Route exact path="/profile" component={AcceptedPuppies} />
    </div>
  )

}

export default App
