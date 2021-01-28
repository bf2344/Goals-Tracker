const router = require('express').Router();
const { User, Goals } = require('../../models');

router.get('/:email', ({params}, res) => {
  User.findOne({ email: params.email})
    .populate({
      path: 'goals',
      populate: {
        path: 'goalUpdates',
        model: "GoalUpdates"
      }
    })
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
})

router.post('/add', (req, res) => {
  console.log(req.body)
  User.create(req.body)
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
})

router.put('/:id/goal/add', ({params, body}, res) =>{
  console.log(body)
  Goals.create(body)
    .then(({ _id }) => User.findOneAndUpdate(
      {_id: params.id}, 
      {$push: { goals: _id }}, 
      {new: true}
      ))
        .then(response => res.status(200).json(response))
        .catch(err => console.log(err))
})


module.exports = router;