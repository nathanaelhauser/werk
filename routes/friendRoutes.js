const passport = require('passport')
const { User } = require('../Models')

module.exports = app => {

  // GET USER FRIENDS
  app.get('/friends', passport.authenticate('jwt'), (req, res) => {
    User.find({ _id: req.user._id })
      .populate('friends')
      .then(user => {
        console.log(user)
        res.sendStatus(200)
      })
      .catch(e => console.log(e))
  })

  // ADD USER FRIEND
  app.put('/friends', passport.authenticate('jwt'), (req, res) => {
    User.findOne({ username: req.body.friend })
      .then(friend => {
        if (friend) {
          User.updateOne({ _id: req.user._id }, { $push: { friends: friend }})
            .then(() => res.json(friend))
            .catch(e => console.log(e))
        } else {
          res.json(friend)
        }
      })
      .catch(e => console.log(e))
  })

  // DELETE USER FRIEND
  app.delete('/friends', passport.authenticate('jwt'), (req, res) => {
    User.findOne({ username: req.body.friend })
      .then(friend => {
        if (friend) {
          User.updateOne({ _id: req.user._id }, { $pull: { friends: friend }})
            .then(() => res.sendStatus(200))
            .catch(e => console.log(e))
        }
      })
      .catch(e => console.log(e))
  })

}