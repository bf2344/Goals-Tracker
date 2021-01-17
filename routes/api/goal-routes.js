const router = require('express').Router();
const { Goals, GoalUpdates } = require('../../models');

router.get('/goal/get', (req, res) => {
  console.log("Hit back end get route for all goals")
  Goals.findAll({})
    .populate("goalUpdates")
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
})

router.post('/goal/add', ({ body }, res) => {
  Goals.create(body)
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
})

router.get('/goal/get/:id', ({ params }, res) => {
  Goals.findOne({
      _id: params.id
  })
    .populate("goalUpdates")
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
})

router.put('/goal/update/:id', ({ params, body }, res) => {
  GoalUpdates.create(body)
    .then(({ _id }) => Goals.findOneAndUpdate({_id: params.id},
    { $push: { goalUpdates: _id } },
    { new: true }
  ))
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
})

module.exports = router;
