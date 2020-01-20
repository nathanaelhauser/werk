const { User } = require('../Models')

module.exports = app => {

  // GET ONE USER INFO
  app.get('/users/:id', (req, res) => {
    User.find({ _id: req.params.id })
      .then(user => res.JSON(user))
      .catch(e => console.log(e))
  })

  //POST USER INFO
  app.post('/users', (req, res) => {
    User.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}