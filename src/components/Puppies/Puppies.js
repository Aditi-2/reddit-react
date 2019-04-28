import React, { Component } from 'react'
import './Pupies.css';

class Puppies extends Component {
    componentWillMount() {
        this.props.fetchData() //fetch data from api
    }
    render() {
        // card width
        const style = {
            width: '400px'
        };
        // card rendered with puppy image and name
        return (
            <div className="container">
                <div className="card-deck">
                    {
                        this.props.posts.items.map((item, i) => {
                            return (
                                <div className="card profile-card" key={i} style={{ style }}>
                                    <img className="card-img-top profile-image" src={item.thumbnail} alt="puppie-pic" />
                                    <div className="card-body">
                                        <h4 className="card-title">{item.name}</h4>
                                        <button className="btn btn-primary">Accept</button>
                                        <button className="btn btn-danger reject-btn">Reject</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default Puppies