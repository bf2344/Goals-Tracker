const router = require('express').Router();
const { User } = require('../../models');

router.post('/goal/add', ({body}, res) =>{
  User.create(body)
    .then(response => res.json(response))
    .catch(err => console.log(err))
})

module.exports = router;
