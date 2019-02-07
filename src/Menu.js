import React, { Component } from 'react';
import "./Menu.css";

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <span className="menu-item" id="bobbyroe">
                    bobbyroe.com
                </span>
                <span className="menu-item" id="letters">
                    letters.org
                </span>
                <span className="menu-item" id="mbucket">
                    monsterbucket.com
                </span>
                <span className="menu-item" id="trouserweasel">
                    trouserweasel.biscuits
                </span>
            </div>
        );
    }
}
export default Menu;

