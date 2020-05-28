const User = require('../models/user.model.js');

module.exports = {
  signup
};

async function signup(req, res) {
  console.log(req.body)
  const user = new User(req.body);
  try {
    await user.save();
    // TODO: Send back a JWT instead of the user
    res.json(user);
  } catch (err) {
    // Probably a duplicate email
    console.log(err)
    res.status(400).json(err);
  }
}