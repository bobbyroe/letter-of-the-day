import React, { Component } from 'react';
import LetterQuad from "./LetterQuad";
import ColorQuad from "./ColorQuad";
import RNG from "./RNG.js";
// import FoodQuad from "./FoodQuad";
// import ThingQuad from "./ThingQuad";

class LotDApp extends Component {

    constructor () {
        super();
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        const date = new Date();
        // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
        const rng = new RNG(date.getMinutes());
        let rand = rng.nextFloat();
        this.state = {
            letter: letters[Math.floor(rand * letters.length)]
        };
    }

    // componentDidMount () {
    //     const ratio = window.devicePixelRatio || 1;
    //     const w = window.innerWidth || document.body.clientWidth;
    //     const h = window.innerHeight || document.body.clientHeight; // screen.height * ratio;
    //     alert(`${ratio}, ${w}, ${h}`);
    // }
    render () {
        return (
            <div className="LotD-App">
                {/* <ThingQuad letter={this.state.letter} /> */}
                <ColorQuad letter={this.state.letter} />
                <LetterQuad letter={this.state.letter} />
                {/* <FoodQuad letter={this.state.letter} /> */}
            </div>
        );
    }
}

export default LotDApp;
