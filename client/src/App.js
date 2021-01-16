import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NumberWidgetContainer from './components/NumberWidgetContainer/index';
import ListWidgetContainer from './components/ListWidgetContainer/index';
import GraphWidgetContainer from './components/GraphWidgetContainer';
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
import GoalCreation from './pages/GoalCreation';
import GoalUpdate from './pages/GoalUpdate'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/goal-creation'>
          <GoalCreation />
        </Route>
        <Route path='/goal-update/:id'>
          <GoalUpdate />
        </Route>
        <Route exact path='/'>
          <div className="Home">
            {/* <LoginButton />
                <LogoutButton /> */}
            <ListWidgetContainer href="http://localhost:3001/api/stats/top" heading="All Users Goals" rowspan={3} />
                <NumberWidgetContainer href="http://localhost:3001/api/goals/open" heading="Active Goals" />
                <GraphWidgetContainer href="http://localhost:3001/api/goals/progression" heading="Goals Achieved Over Time" colspan={2} rowspan={2} />
                <NumberWidgetContainer href="http://localhost:3001/api/goals/today" heading="Today's Goals" />
                <NumberWidgetContainer href="http://localhost:3001/api/goals/urgent" heading="'Urgent' Goals" />
                <NumberWidgetContainer href="http://localhost:3001/api/goals/response" heading="7 Day Goal Tracker" />
                <NumberWidgetContainer href="http://localhost:3001/api/goals/solved" heading="1 Month Goal Tracker" />
          </div>

        </Route>
      </Router>
    </div>
  );
}

export default App;