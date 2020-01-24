const { Workout, Exercise } = require('../Models')

module.exports = app => {

  // GET ALL USERS 
  app.get('/workouts', (req, res) => {
    Workout.find()
      .populate('exercises')
      .then(workouts => res.json(workouts))
      .catch(e => console.error(e))
  })

  // GET ONE USER 
  app.get('/workouts/:id', (req, res) => {
    Workout.find({ _id: req.params.id })
      .populate('exercises')
      .then(workout => res.json(workout))
      .catch(e => console.error(e))
  })

  // POST ONE USER 
  app.post('/workouts', (req, res) => {
    Workout.create(req.body)
      .then(workout => res.json(workout))
      .catch(e => console.error(e))
  })

  // UPDATE ONE USER
  app.put('/workouts/:id', (req, res) => {
    Workout.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // DELETE ONE USER
  app.delete('/workouts/:id', (req, res) => {
    Workout.deleteOne({ _id: req.params.id })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}