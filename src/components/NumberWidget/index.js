import React, { Component } from 'react';
import Widget from '../Widget/index';
import NumberDisplay from '../NumberDisplay/index';
import Progress from '../Progress/index';
import './index.css';

class NumberWidget extends Component {
    // Decide whether to show widget
    showWidget() {
        // Show loading indicator while initial data is being fetched
        if (this.props.value === undefined) {
            return <p>Loading...</p>;
        }

        return <div className="NumberWidget">
            <NumberDisplay max={this.props.max} value={this.props.value} />
            {/* Conditionally show the progress bar */}
            {this.showProgress()}
        </div>
    }

    // Decide whether to show a progress bar
    showProgress() {
        // Only show if the required min, max and value props are supplied
        if (this.props.min !== undefined && this.props.max !== undefined && this.props.value !== undefined) {
            return <Progress min={this.props.min} max={this.props.max} value={this.props.value} />;
        }

        return null;
    }

    render() {
        return (
            // Wrap the number display component in the generic wrapper
            <Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} loading={this.props.loading}>
                {this.showWidget()}
            </Widget>
        );
    }
}

export default NumberWidget;