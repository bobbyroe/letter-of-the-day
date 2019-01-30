import React, { Component } from 'react';
import "./Quadrant.css";

class LetterQuad extends Component {

    render () {
        return (
            <div className="quadrant" id="letter-quad">
                {this.props.letter}
            </div>
        );
    }
}

export default LetterQuad;