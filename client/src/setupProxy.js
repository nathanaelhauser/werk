const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  console.log('using proxy')
  app.use(
    proxy(['/exercises', '/workouts'], { target: "http://localhost:3001", changeOrigin: true })
  )
}
