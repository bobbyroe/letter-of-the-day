import React, { Component } from 'react';
import './LotDApp.css';
import LetterQuad from "./LetterQuad";
import ColorQuad from "./ColorQuad";
import FoodQuad from "./FoodQuad";
import ThingQuad from "./ThingQuad";
import Menu from "./Menu";
import Dropdown from "./Dropdown";

class LotDApp extends Component {

    constructor () {
        super();
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        this.state = {
            letter: letters[Math.floor(Math.random() * letters.length)]
        };
        this.dropdown = React.createRef();
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
    
    handleMouseOver(evt) {
        const { top, left, width } = evt.target.getBoundingClientRect();
        if (evt.target.className === "menu-item") {
            this.dropdown.current.show({top, left});
        }
    }

    handleMouseOut(evt) {
        if (evt.target.className === "menu-item") {
            this.dropdown.current.hide();
        }
    }

    render () {
        return (
            <div className="container" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <div className="LotD-App">
                    <LetterQuad letter={this.state.letter} />
                    <ColorQuad letter={this.state.letter} />
                    <FoodQuad letter={this.state.letter} />
                    <ThingQuad letter={this.state.letter} />
                    <Dropdown ref={this.dropdown} />
                </div>
                <Menu />
            </div>
        );
    }
}

export default LotDApp;
