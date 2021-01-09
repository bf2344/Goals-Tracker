import React, { Component } from 'react';
import NumberWidgetContainer from './components/NumberWidgetContainer/index';
import ListWidgetContainer from './components/ListWidgetContainer/index';
import GraphWidgetContainer from './components/GraphWidgetContainer';
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
import './App.css';

function App () {
        return (
            <div className="App">
                <ListWidgetContainer href="http://localhost:3001/api/stats/top" heading="All Users Goals" rowspan={3} />
                <NumberWidgetContainer href="http://localhost:3001/api/tickets/open" heading="Active Goals" />
                <GraphWidgetContainer href="http://localhost:3001/api/tickets/progression" heading="Goals Achieved Over Time" colspan={2} rowspan={2} />
                <NumberWidgetContainer href="http://localhost:3001/api/tickets/today" heading="Today's Goals" />
                <NumberWidgetContainer href="http://localhost:3001/api/tickets/urgent" heading="'Urgent' Goals" />
                <NumberWidgetContainer href="http://localhost:3001/api/stats/response" heading="7 Day Goal Tracker" />
                <NumberWidgetContainer href="http://localhost:3001/api/stats/solved" heading="1 Month Goal Tracker" />
            </div>
        );
    }

export default App;