let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/goals", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let seedData = [
  {
    title: 'Test Title1',
    description: 'Test description1'
  },
  {
    title: 'Test Title2',
    description: 'Test description2'
  },
  {
    title: 'Test Title3',
    description: 'Test description3'
  },
  {
    title: 'Test Title4',
    description: 'Test description4'
  },
  {
    title: 'Test Title5',
    description: 'Test description5'
  },
  {
    title: 'Test Title6',
    description: 'Test description6'
  },
  {
    title: 'Test Title7',
    description: 'Test description7'
  },
  {
    title: 'Test Title8',
    description: 'Test description8'
  },
  {
    title: 'Test Title9',
    description: 'Test description9'
  },
  {
    title: 'Test Title10',
    description: 'Test description10'
  }
]

db.Goals.deleteMany({})
  .then(() => db.Goals.collection.insertMany(seedData))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });