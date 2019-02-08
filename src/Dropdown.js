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
            },
            items: ["item 1", "item 2", "item 3", "item 4", "item 5"],
            current_id: "none"
        }
        this.body = React.createRef();
    }

    show(evt) {
        const left = evt.target.offsetLeft;
        const { bottom } = evt.target.getBoundingClientRect();
        const current_id = evt.target.id;
        this.setState({ 
            hiddenClassName: "",
            top: bottom,
            left,
            current_id,
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
                id="dd-menu"
            >
            {this.state.items.map((item, i) =>
                <div className="dropdown-item" key={i}>{this.state.current_id + " " + item}</div>
            )}
            </div>
        );
    }
}
export default Dropdown;
