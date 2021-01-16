const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const app = express();
const PORT = 3001
const routes = require('./routes');
require("dotenv").config();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger('dev'));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/goals", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}, (err) => {
  if (err) throw err;
  console.log(`mongoose connection successful`);
  app.listen(PORT, function() {
    console.log('Data being served from http://localhost:3001');
  });
})