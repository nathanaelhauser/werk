const passport = require('passport')
const jwt = require('jsonwebtoken')
const { Users } = require('../Models')

module.exports = app => {

  // GET ALL USERS 
  app.get('/users', (req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(e => console.error(e))
  })

  // GET ONE USER 
  app.get('/users/:id', (req, res) => {
    User.find({ _id: req.params.id })
      .then(user => res.json(user))
      .catch(e => console.error(e))
  })

  // GET ONE USER WITH TOKEN
  app.get('/myuser', passport.authenticate('jwt'), (req, res) => {
    res.json(req.user)
  })

  // POST ONE USER 
  app.post('/users', (req, res) => {
    User.create(req.body)
      .then(user => res.json(user))
      .catch(e => console.error(e))
  })

  // UPDATE ONE USER
  app.put('/users/:id', (req, res) => {
    User.updateOne({ _id: req.params.id }, req.body )
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // DELETE ONE USER
  app.delete('/users/:id', (req, res) => {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}