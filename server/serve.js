const httpServer = require('http').createServer()
const io = require('socket.io')(httpServer, {
  cors: {
    origin: '*',
  },
})

const PORT = 5000

io.on('connection', (socket) => {
  console.log('Connection established!')

  socket.on('newMessage', (data) => {
    io.emit('newMessage', data)
  })

  socket.on('userNameChange', (data) => {
    io.emit('userNameChange', data)
  })

  socket.on('disconnect', () => {
    console.log('Disconnected!')
  })
})

httpServer.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT} !`)
})
