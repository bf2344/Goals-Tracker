const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({
  email: {
    type: String,
    unique: true
  },
  name: {
    type: String
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  goals: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Goals'
    }
  ]
})

const Users = mongoose.model('Users', UserModel)

module.exports = Users;