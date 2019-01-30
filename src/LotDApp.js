import React, { Component } from 'react';
import './LotDApp.css';
import LetterQuad from "./LetterQuad";
import ColorQuad from "./ColorQuad";
import FoodQuad from "./FoodQuad";
import ThingQuad from "./ThingQuad";

class LotDApp extends Component {

    constructor () {
        super();
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        this.state = {
            letter: letters[Math.floor(Math.random() * letters.length)]
        };
    }

    render () {
        return (
            <div className="LotD-App">
                <LetterQuad letter={this.state.letter} />
                <ColorQuad letter={this.state.letter} />
                <FoodQuad letter={this.state.letter} />
                <ThingQuad letter={this.state.letter} />
            </div>
        );
    }
}

export default LotDApp;
