import React from "react";
import axios from 'axios';

class AddDestination extends React.Component {
    constructor() {
        super();
        this.state = {
            place: "",
            city: "",
            country: "",
            img: ""
        }
    }

    handlePlaceChange = e => {
        this.setState({place: e.target.value})
    }
    handleCityChange = e => {
        this.setState({city: e.target.value})
    }
    handleCountryChange = e => {
        this.setState({country: e.target.value})
    }
    handleImgChange = e => {
        this.setState({img: e.target.value})
    }

    handleClick = e => {
        const {img, place, city, country} = this.state;
        e.preventDefault();
        console.log("ran function");
        axios.post("/api/travel/", {
            img,
            city,
            country,
            place
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <input placeholder="Place" onChange={this.handlePlaceChange}/>
                <input placeholder="City" onChange={this.handleCityChange}/>
                <input placeholder="Country" onChange={this.handleCountryChange}/>
                <input placeholder="Image URL" onChange={this.handleImgChange}/>
                <button onClick={this.handleClick}>Add Places</button>
            </div>
        )
    }
}

export default AddDestination;