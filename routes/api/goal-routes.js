const router = require('express').Router();
const { Goals, GoalUpdates } = require('../../models');

router.get('/get', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  Goals.find({})
    .populate("goalUpdates")
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
})
router.get('/get/:id', ({ params }, res) => {
  Goals.findOne({
      _id: params.id
  })
    .populate("goalUpdates")
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
})

router.post('/add', ({ body }, res) => {
  Goals.create(body)
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
})


router.put('/update/:id', ({ params, body }, res) => {
  GoalUpdates.create(body)
    .then(({ _id }) => Goals.findOneAndUpdate({_id: params.id},
    { $push: { goalUpdates: _id } },
    { new: true }
  ))
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
})

module.exports = router;
