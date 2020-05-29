var Exercise = require('../models/exercise.model');

module.exports = {
  create,
  // show,
  Exercise
};

async function create(req, res) {
  console.log('user: ', req.user)
  req.body.user=req.user._id
  try {
    await Exercise.create(req.body);
    
    
  } catch (err) {
    res.json({err});
  }
}
// function show(req, res) {
//   Exercise.findById(req.params.id).then(function(exercise) {
//     res.status(200).json(exercise);
//   }).catch(function(err) {
//     res.status(400).json(err);
//   });
// }

// function show(req, res) {
//   Exercise.findById(req.params.id).exec((err, exercise) => {
//     res.render('exercise/show');
//   });
// }







