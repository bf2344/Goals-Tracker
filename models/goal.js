const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalsModel = new Schema({
  createdAt: {
    type: Date,
    default: ()=> new Date()
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  completionDate: {
    type: Date,
  },
  color: {
    type: String,
    default: '#D7D0C8'
  },
  popular: {
    type: String
  },
  highPriority: {
    type: Boolean,
    default: false
  },
  goalUpdates: [
    {
      type: Schema.Types.ObjectId,
      ref: 'GoalUpdates'
    }
  ]
})

const Goals = mongoose.model('Goals', GoalsModel)

module.exports = Goals;