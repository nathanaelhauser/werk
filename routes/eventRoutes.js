const { Event, User, Workout } = require('../Models')

module.exports = app => {

  // GET ALL EVENTS FOR USER
  app.get('/events', (req, res) => {
    Event.find()
      .populate('user')
      .populate('workout')
      .then(events => res.json(events))
      .catch(e => console.error(e))
  })

  // GET ONE EVENT FOR USER
  app.get('/events/:id', (req, res) => {
    Event.find({ _id: req.params.id })
      .populate('user')
      .populate('workout')
      .then(event => res.json(event))
      .catch(e => console.error(e))
  })

  // POST ONE EVENT 
  app.post('/events', (req, res) => {
    Event.create(req.body)
      .then(event => res.json(event))
      .catch(e => console.error(e))
  })

  // UPDATE ONE EVENT
  app.put('/events/:id', (req, res) => {
    Event.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // DELETE ONE EVENT
  app.delete('/events/:id', (req, res) => {
    Event.deleteOne({ _id: req.params.id })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })


}