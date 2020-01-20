const { User } = require('../Models')

module.exports = app => {

  // GET ALL USERS 
  app.get('/users', (req, res) => {
    User.find()
      .then(users => res.JSON(users))
      .catch(e => console.error(e))
  })

  // GET ONE USER 
  app.get('/users/:id', (req, res) => {
    User.find({ _id: req.params.id })
      .then(user => res.JSON(user))
      .catch(e => console.error(e))
  })

  //POST USER 
  app.post('/users', (req, res) => {
    User.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })
}