const { Workout, Exercise } = require('../Models')
const passport = require('passport')

module.exports = app => {

  // GET ALL WORKOUTS 
  app.get('/workouts', (req, res) => {
    Workout.find()
      .populate('exercises')
      .then(workouts => res.json(workouts))
      .catch(e => console.error(e))
  })

  // GET USER CUSTOM WORKOUTS
  app.get('/userworkouts', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { _id } = req.user
    Workout.find({ author: _id })
      .populate('exercises')
      .then(workouts => res.json(workouts))
      .catch(e => console.error(e))
  })

  // GET ONE WORKOUT 
  app.get('/workouts/:id', (req, res) => {
    Workout.find({ _id: req.params.id })
      .populate('exercises')
      .then(workout => res.json(workout))
      .catch(e => console.error(e))
  })

  // POST ONE WORKOUT
  app.post('/workouts', (req, res) => {
    Workout.create(req.body)
      .then(workout => res.json(workout))
      .catch(e => console.error(e))
  })

  // UPDATE ONE WOKROUT
  app.put('/workouts/:id', (req, res) => {
    Workout.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // DELETE ONE WORkOUT
  app.delete('/workouts/:id', (req, res) => {
    Workout.deleteOne({ _id: req.params.id })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}