const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  console.log('using proxy')
  app.use(
    proxy('/exercises', { target: "http://localhost:3001", changeOrigin: true })
  )
}
