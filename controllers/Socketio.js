const { Server } = require('http')

module.exports = (app) => {

  const server = Server(app)
  const io = require('socket.io')(server)

  server.listen(80)

  io.on('connection', socket => {
    
  })

}