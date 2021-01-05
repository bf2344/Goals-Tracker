import React, { Component } from 'react';
import Progress from '../Progress';
import './index.css';

class ListItem extends Component {
    render() {
        return (
            <li className="ListItem">
                <div className="value">{this.props.value}</div>
                <div className="label">
                    {this.props.label}
                    {/* Compare progress against others in the list */}
                    <Progress min={this.props.min} max={this.props.max} value={this.props.value} />
                </div>
            </li>
        )
    }
}

export default ListItem;