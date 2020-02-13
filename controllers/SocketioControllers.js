const { socket } = require('../config')

module.exports = {

  announceLogin: (_id) => {
    socket.emit('login', { _id })
  },

  announceLogout: (_id) => {
    socket.emit('logout', { _id })
  }

}