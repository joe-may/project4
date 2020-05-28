const router = require('express').Router();
const express = require('express');
let User = require('../models/user.model');
const usersCtrl = require('../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

////////////////////// AUTH


///////////////////

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  // const username = req.body.username;

  // const newUser = new User({username});

  // newUser.save()
  //   .then(() => res.json('User added!'))
  //   .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;