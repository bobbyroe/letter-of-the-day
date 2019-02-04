import React, { Component } from 'react';
import "./Quadrant.css";
import data from './letters.json';

class FoodQuad extends Component {

    constructor() {
        super();
        this.state = {
            food: "GERP",
            hex: "#000000"
        }
    }

    componentDidMount() {
        const obj = data[this.props.letter];
        this.setState({
            food: (obj !== undefined) ? obj.food : "NOPE",
            hex: (obj !== undefined) ? obj.hex : "#404040"
        })
    }

    render() {
        return (
            <div className="quadrant" id="food-quad">
                {this.state.food}
        </div>
        );
    }
    
}

export default FoodQuad;