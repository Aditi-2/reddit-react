import React, { Component } from 'react'
import './AcceptedPuppies.css'

class AcceptedPuppies extends Component {
    
    render() {
        // card width
        const style = {
            width: '400px'
        }
        // card rendered with accepted puppy image and name

        if(this.props.posts.length){
        return (
            <div className="container">
                <div className="card-deck">
                    {
                        this.props.posts.map((item, i) => {
                            return (
                                <div className="card profile-card" key={i} style={{ style }}>
                                    <img className="card-img-top profile-image" src={item.thumbnail} alt="puppie-pic" />
                                    <div className="card-body">
                                        <h4 className="card-title">{item.name}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
                }
                else{
                    return (
                        <div className="container spaceTop">
                        <h1>You haven't accepted any images yet :(</h1>
                        </div>
                    )
                }
    }

}

export default AcceptedPuppies