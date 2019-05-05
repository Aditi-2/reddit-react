import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    render() {
       
        // header rendered with profile link if user is logedIn
        if(this.props.user.loggedIn){
        return (
            <div className="header">
                <Link to="/home" className="logo">Puppies Reddit</Link>
                <Link to="/profile" className="header-right">Profile</Link>
            </div>
        )
        }
        else{ // header rendered without profile link if user is not logedIn
            return (
                <div className="header">
                    <a href="/" className="logo">Puppies Reddit</a>
                </div>
            )
        }
    }

}

export default Header