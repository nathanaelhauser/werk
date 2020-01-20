const {model, Schema} = require('mongoose')

module.exports = {
  Users: require('./Users.js')(model, Schema),
  Exercises: require('./Exercises.js')(model, Schema)
  
}
