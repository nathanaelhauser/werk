const { Users } = require('../Models')

module.exports = app => {

  // GET ONE USER INFO
  app.get('/users/:id', (req, res) => {
    Users.find({ _id: req.params.id })
      .then(user => res.JSON(user))
      .catch(e => console.log(e))
  })

  //POST USER INFO
  app.post('/users', (req, res) => {
    Users.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}