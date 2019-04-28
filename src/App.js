import React from 'react'
import { Route } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import Puppies from './containers/PuppiesContainer' //change to container
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  return (
    <div className="App">
      <div className="header"> 
        <a href="/" className="logo">Puppies Reddit</a>
      </div>
      <Route exact path="/" component={HomeContainer} /> 
      <Route exact path="/home" component={Puppies} />
    </div>
  )

}

export default App
