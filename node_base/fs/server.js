const net = require('net')
const fs = require('fs')

const server = net.createServer()

server.listen(12306, '127.0.0.1')
server.on('listening', () => {
  console.log('服务已启动')
})
server.on('connection', (socket) => {
  socket.on('data', (data) => {
    console.log(data.toString())
    const url = data.toString().split('\r\n')[0].split(' ')[1]
    try {
      const dataFile = fs.readFileSync(__dirname + url)
      socket.write('HTTP/1.1 200OK\r\n\r\n')
      socket.write(dataFile)
    } catch (err) {
      socket.write('HTTP/1.1 404NotFound\r\n\r\n <html><body><h1>404 Not Found</h1></body></html>')
    }
    socket.end()
  })
})