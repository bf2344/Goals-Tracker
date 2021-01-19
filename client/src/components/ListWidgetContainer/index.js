import React, { Component, useState, useEffect } from 'react';
import ListWidget from '../ListWidget/index';

// const ListWidgetContainer = props =>{
//   const [info, setInfo] = useState({
//     loading: true,
//     values: []
//   });

//   const getData = ()=> {
//     // Tell the Widget component we're currently loading
//     setInfo({ loading: true });

//     // const proxyurl = "https://cors-anywhere.herokuapp.com/";
//     const url = props.href;
//     return fetch(url)
//       .then(response => {
//         console.log(response)
//         response.json()
//       })
//       .then(res => {
//         console.log("shit")
//         // Update state with data
//         console.log(res)
//         // setInfo({ loading: false, values: res.data });
//       })
//       .catch(error => {
//         // At least tell the Widget component we have stopped loading
//         console.log(error);
//         setInfo({ loading: false });
//       });
//   }
//   useEffect(()=>{
//     getData().then(_ => {
//       // Re-fetch every minute
//       setInfo({...info, interval: setInterval(getData, 60000)})
//     });
//   }, []);


//   return (
//     // Render the list widget
//     <ListWidget heading={props.heading} colspan={props.colspan} rowspan={props.rowspan} listItems={info.values} loading={info.loading} />
//   );
// }

class ListWidgetContainer extends Component {
  constructor() {
    super();


    this.state = {
      loading: false,
      values: []
    }

    // Bind function to refer to component
    this.getData = this.getData.bind(this);
  }

  // Fetch data when the component is added
  componentDidMount() {
    this.getData().then(_ => {
      // Re-fetch every minute
      this.interval = setInterval(this.getData, 60000);
    });
  }

  // Fetch new data
  getData() {
    // Tell the Widget component we're currently loading
    this.setState({ loading: true });

    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = this.props.href;
    return fetch(url)
      .then(response => response.json())
      .then(res => {
        console.log("shit")
        // Update state with data
        this.setState({ loading: false, values: res });
      })
      .catch(error => {
        // At least tell the Widget component we have stopped loading
        console.log(error);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      // Render the list widget
      <ListWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} listItems={this.state.values} loading={this.state.loading} />
    );
  }
}
export default ListWidgetContainer;