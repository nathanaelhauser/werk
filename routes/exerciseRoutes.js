const { Exercise, Workout } = require('../Models')

module.exports = app => {

  // GET ALL USERS 
  app.get('/exercises', (req, res) => {
    Exercise.find()
      .populate('workout')
      .then(exercises => res.json(exercises))
      .catch(e => console.error(e))
  })

  // GET ONE USER 
  app.get('/exercises/:id', (req, res) => {
    Exercise.find({ _id: req.params.id })
      .populate('workout')
      .then(exercise => res.json(exercise))
      .catch(e => console.error(e))
  })

  // POST ONE USER 
  app.post('/exercises', (req, res) => {
    Exercise.create(req.body)
      .then(({ _id }) => {
        Workout.updateOne({ _id: req.body.workout }, { $push: { exercises: _id }})
          .then(exercise => res.json(exercise))
          .catch(e => console.error(e))
      })
      .catch(e => console.error(e))
  })

  // UPDATE ONE USER
  app.put('/exercises/:id', (req, res) => {
    Exercise.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // DELETE ONE USER
  app.delete('/exercises/:id', (req, res) => {
    Exercise.deleteOne({ _id: req.params.id })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}