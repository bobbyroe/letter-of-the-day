import React, { Component } from 'react';
import "./Quadrant.css";
import data from './letters.json';
class ColorQuad extends Component {

    constructor () {
        super();
        this.state = {
            color: "GERP",
            hex: "#000000"
        }
    }
    componentDidMount () {
        const obj = data[this.props.letter];
        this.setState({
            color: (obj !== undefined) ? obj.color : "NOPE",
            hex: (obj !== undefined) ? obj.hex : "#404040"
        })
    }

    render() {
        const style_obj = {
            backgroundColor: this.state.hex
        }
        return (
            <div className="quadrant" id="color-quad" style={style_obj}>
                {this.state.color}
            </div>
        );
    }
}

export default ColorQuad;