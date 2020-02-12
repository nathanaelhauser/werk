module.exports = app => {
  const server = require('http').Server(app)
  const io = require('socket.io')(server)
  server.listen(80)

  io.on('connection', socket => {
    socket.on('id', data => {
      console.log(data)
    })
  })
}