import React, { Component } from 'react';
import axios from 'axios';
import NumberWidget from '../NumberWidget';

class NumberWidgetContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      // min: undefined,
      // max: undefined,
      // value: undefined,
      userGoals: this.props.userGoals
    }

    // Bind function to refer to component
    // this.getData = this.getData.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps)
  }

  // // Fetch data when the component is added
  // componentDidMount() {
  //   this.getData().then(_ => {
  //     // Re-fetch every minute
  //     this.interval = setInterval(this.getData, 60000);
  //   });
  // }

  // // Fetch new data
  // getData() {
  //   // Tell the Widget component we're currently loading
  //   this.setState({ loading: true });

  //   // Fetch data
  //   return axios.get(this.props.href)
  //     .then(response => {
  //       // Build a new state
  //       let newState = { loading: false };

  //       // Populate state with new data
  //       if (response.data.hasOwnProperty("min")) {
  //         newState["min"] = response.data.min;
  //       }
  //       if (response.data.hasOwnProperty("max")) {
  //         newState["max"] = response.data.max;
  //       }
  //       if (response.data.hasOwnProperty("value")) {
  //         newState["value"] = response.data.value;
  //       }

  //       // Update state with data
  //       this.setState(newState);
  //     })
  //     .catch(error => {
  //       // At least tell the Widget component we have stopped loading
  //       console.log(error);
  //       this.setState({ loading: false });
  //     });
  // }

  render() {
    return (
      // Render the number widget
      <NumberWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} min={this.state.min} max={this.state.max} value={this.state.userGoals} loading={this.state.loading} />
    );
  }
}

export default NumberWidgetContainer;