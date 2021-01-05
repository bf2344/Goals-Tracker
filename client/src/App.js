import React, { Component } from 'react';
import NumberWidgetContainer from './components/NumberWidgetContainer/index';
import ListWidgetContainer from './components/ListWidgetContainer/index';
import GraphWidgetContainer from './components/GraphWidgetContainer';

// Add in styles
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ListWidgetContainer href="http://localhost:3001/stats/top" heading="All Users Goals" rowspan={3} />
                <NumberWidgetContainer href="http://localhost:3001/goals/open" heading="Active Goals" />
                <GraphWidgetContainer href="http://localhost:3001/goals/progression" heading="Goals Achieved Over Time" colspan={2} rowspan={2} />
                <NumberWidgetContainer href="http://localhost:3001/goals/today" heading="Today's Goals" />
                <NumberWidgetContainer href="http://localhost:3001/goals/urgent" heading="'Urgent' Goals" />
                <NumberWidgetContainer href="http://localhost:3001/goals/response" heading="7 Day Goal Tracker" />
                <NumberWidgetContainer href="http://localhost:3001/goals/solved" heading="1 Month Goal Tracker" />
            </div>
        );
    }
}

export default App;