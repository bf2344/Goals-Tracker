import React, { Component } from 'react';

// Import components
import Widget from '../Widget';
import ListDisplay from '../ListDisplay';
import ListItem from '../ListItem';

// Import styling
import './index.css';

class ListWidget extends Component {
    //Sort items in descending order
    sortListItems() {
      if(this.props.listItems){
        let sortedItems = this.props.listItems.slice();
        return sortedItems.sort((a, b) => {
          console.log(a.goalUpdates[a.goalUpdates.length - 1].progress)
          console.log(b.goalUpdates[b.goalUpdates.length - 1].progress)
            if ((a.goalUpdates.length ? a.goalUpdates[a.goalUpdates.length - 1].progress : 0) > (b.goalUpdates.length ? b.goalUpdates[b.goalUpdates.length - 1].progress : 0)) {
                return -1;
            } else if ((a.goalUpdates.length ? a.goalUpdates[a.goalUpdates.length - 1].progress : 0) < (b.goalUpdates.length ? b.goalUpdates[b.goalUpdates.length - 1].progress : 0)) {
                return 1;
            }
            return 0;
            
        });
      }
    }

    // Decide whether to show widget
    showWidget() {
        let sortedItems = this.sortListItems();

        // Show loading indicator while initial data is being fetched
        if (this.props.listItems && this.props.listItems.length === 0) {
            return null;
        }

        // Get min/max values for progress bar
        let min = 0;
        let max;
        if(sortedItems[0].goalUpdates.length){
          max = sortedItems && sortedItems[0].goalUpdates[sortedItems[0].goalUpdates.length - 1].progress;
        } else {
          max = 0
        }

        return (
            <ListDisplay>
                {/* Add a ListItem for each piece of data */}
                {sortedItems.map((item, index) => <ListItem key={item.label} label={item.title} value={item.goalUpdates[item.goalUpdates.length - 1].progress} min={min} max={max} />)}
            </ListDisplay>
        );
    }

    render() {
        return (
            // Wrap the list display component in the generic wrapper
            <Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} loading={this.props.loading} >
                <div className="ListWidget">
                    {/* Conditionally show the widget */}
                    {this.showWidget()}
                </div>
            </Widget>
        );
    }
}

export default ListWidget;