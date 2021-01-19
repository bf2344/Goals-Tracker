const router = require('express').Router();
const { User } = require('../../models');

router.get('/:email', ({params}, res) => {
  User.find({ email: params.email})
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
})


module.exports = router;