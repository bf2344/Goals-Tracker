const router = require('express').Router();
const { User } = require('../../models');

router.get('/:email', ({params}, res) => {
  User.find({ email: params.email})
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
})

router.post('/add', (req, res) => {
  console.log(req.body)
  User.create(req.body)
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
})


module.exports = router;