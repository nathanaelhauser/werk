// need to insert route links

module.exports = app => {
    require('./userRoutes.js')(app)
    require('./workoutRoutes.js')(app)
    require('./exerciseRoutes.js')(app)
    require('./eventRoutes.js')(app)
  }