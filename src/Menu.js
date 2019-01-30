import React, { Component } from 'react';
import "./Menu.css";

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <span className="menu-item">
                    bobbyroe.com
                </span>
                <span className="menu-item">
                    letters.org
                </span>
                <span className="menu-item">
                    monsterbucket.com
                </span>
                <span className="menu-item">
                    trouserweasel.biscuits
                </span>
            </div>
        );
    }
}
export default Menu;

