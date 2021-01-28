import React, { Component, useState, useEffect } from 'react';
import ListWidget from '../ListWidget/index';

class ListWidgetContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      values: []
    }

    // Bind function to refer to component
    // this.getData = this.getData.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loading: false, values: nextProps.userGoals})
  }

  // Fetch data when the component is added
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

  //   const url = this.props.href;
  //   return fetch(url)
  //     .then(response => response.json())
  //     .then(res => {
  //       console.log("shit")
  //       // Update state with data
  //       this.setState({ loading: false, values: res });
  //     })
  //     .catch(error => {
  //       // At least tell the Widget component we have stopped loading
  //       console.log(error);
  //       this.setState({ loading: false });
  //     });
  // }

  render() {
    return (
      // Render the list widget
      <ListWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} listItems={this.state.values} loading={this.state.loading} />
    );
  }
}
export default ListWidgetContainer;