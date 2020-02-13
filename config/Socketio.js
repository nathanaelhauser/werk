const io = require('socket.io')
let socket = io()

socket.on('connection', () => {
  console.log('connected')
})

module.exports = socket