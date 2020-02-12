const proxy = require("http-proxy-middleware")

module.exports = function(app) {
  app.use(
    proxy(
      [
        '/exercises', 
        '/workouts', 
        '/userAuth', 
        '/login',
        '/authorize',
        '/myuser',
        '/events',
        '/users'
      ], { target: "http://localhost:3001", changeOrigin: true }
    )
  )
}
