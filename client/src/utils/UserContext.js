import React, { createContext } from 'react';

const UserContext = createContext({
  _id: '',
  name: '',
  email: '',
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

export default UserContext;