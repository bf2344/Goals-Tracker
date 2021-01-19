import React, { createContext } from 'react';

const GoalContext = createContext({
  _id: '',
  first: '',
  last: '',
  email: '',
  _id: '',
  goals: [{
    _id: '',
    title: '',
    description: '',
    date: '',
    color: '',
    popular: '',
    highPriority: false,
    goalUpdates: [{
      _id: '',
      updatedAt: '',
      progress: 0,
      note: ''
    }]
  }]
});

export default GoalContext;