import React, { Component } from 'react';
import "./Dropdown.css";

class Dropdown extends Component {

    constructor () {
        super();
        this.state = {
            hiddenClassName: "hidden",
            position: {
                top: 0,
                left: 0,
            }
        }
        this.body = React.createRef();
    }

    show(pos) {
        const { top, left } = pos;
        this.setState({ 
            hiddenClassName: "",
            top: top + 20,
            left: left - 150,
        });
    }

    hide () {
        this.setState({ hiddenClassName: "hidden" });
    }

    render () {
        const styleObj = {
            top: this.state.top,
            left: this.state.left
        };
        return (
            <div 
                className={`dropdown ${this.state.hiddenClassName}`}
                style={styleObj}
                ref={this.body}
            >
                <div className="dropdown-item">item 1</div>
                <div className="dropdown-item">item 2</div>
                <div className="dropdown-item">item 3</div>
                <div className="dropdown-item">item 4</div>
                <div className="dropdown-item">item 5</div>
            </div>
        );
    }
}
export default Dropdown;
