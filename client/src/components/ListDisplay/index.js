import React, { Component } from 'react';

// Import styling
import './index.css';

class ListDisplay extends Component {
    render() {
        return (
            <ul className="ListDisplay">
                {this.props.children}
            </ul>
        )
    }
}

export default ListDisplay;