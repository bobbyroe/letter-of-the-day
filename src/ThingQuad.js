import React, { Component } from 'react';
import "./Quadrant.css";
import data from './letters.json';

class ThingQuad extends Component {

    constructor (props) {
        super(props);
        this.state = {
            emoji: "⛔️",
            hex: "#000",
        }
    }

    componentDidMount() {
        const obj = data[this.props.letter];
        this.setState({
            emoji: (obj !== undefined) ? obj.emoji : "⛔️",
        })
    }

    render() {
        const style_obj = {
            backgroundColor: this.state.hex
        }
        return (
            <div className="quadrant" id="thing-quad" style={style_obj}>
                {this.state.emoji}
        </div>
        );
    }
    
}

export default ThingQuad;