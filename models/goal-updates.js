const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalUpdatesSchema = new Schema({
  updatedAt: {
    type: Date,
    default: ()=> new Date()
  },
  progress: {
    type: Number
  },
  note: {
    type: String
  }
})

const GoalUpdates = mongoose.model('GoalUpdates', GoalUpdatesSchema);

module.exports = GoalUpdates;