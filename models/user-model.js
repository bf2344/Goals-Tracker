const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: Date
  },
  color: {
    type: String
  },
  popular: {
    type: String
  },
  checked: {
    type: Boolean
  }
})

const User = mongoose.model('user', UserModel)

module.exports = User;