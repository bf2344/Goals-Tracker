import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NumberWidgetContainer from './components/NumberWidgetContainer/index';
import ListWidgetContainer from './components/ListWidgetContainer/index';
import GraphWidgetContainer from './components/GraphWidgetContainer';
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
import Profile from "./components/Profile"
import GoalCreation from './pages/GoalCreation';
import GoalUpdate from './pages/GoalUpdate';
import UserContext from './utils/UserContext';
import './App.css';

function App() {
  const [userData, setUserData] = useState();
  const { user } = useAuth0();

  const getUser = () => {
    fetch(`/api/user/${user.email}`)
      .then(res => res.json())
      .then(data => setUserData(data))
      .catch(err => console.log(err))
  }

  const postData = () => {
    fetch('/api/user/add', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json"
      }
    })
      .catch(err => console.log(err))
  }

  useEffect(async () => {
    if (user) {
      await getUser()
      if (!userData) {
        await postData()
        await getUser()
      }
    }
}, [user]);

return (
  <div className="App">
    <UserContext.Provider value={userData}>
      <Router>
        <Route path='/goal-creation/:userId'>
          <GoalCreation />
        </Route>
        <Route path='/goal-update/:goalId'>
          <GoalUpdate />
        </Route>
        <Route exact path='/'>
          <div className="Home">
            <LoginButton />
            <LogoutButton />
            <Profile />
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
    </UserContext.Provider>
  </div>
);
}

export default App;