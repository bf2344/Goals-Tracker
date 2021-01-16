const router = require('express').Router();
const { Goals } = require('../../models');

router.get('/goal/get', (req, res) => {
  Goals.findAll({})
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
})

router.post('/goal/add', ({ body }, res) => {
  Goals.create(body)
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
})

router.post('/goal/get/:id', ({ params }, res) => {
  Goals.findOne({
    where: {
      _id: params.id
    }
  })
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
})

router.put('/goal/update/:id', ({ params, body }, res) => {
  Goals.findByIdAndUpdate(
    params.id,
    { $push: { goalUpdates: body } },
    { new: true, runValidators: true }
  )
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
})

module.exports = router;
