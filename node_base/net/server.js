const net = require('net')

// const server = net.createServer((connection) => {
//   console.log('客户端已连接')
//   connection.on('end', () => {
//     console.log('客户端已断开连接')
//   })
//   connection.write('hello world \r\n')
// })
// server.on('error', (err) => {
//   throw err
// })

// server.listen(8080, () => {
//   console.log('服务已启动')
// })

const server = net.createServer()
server.listen(12306, '127.0.0.1')
server.on('listening', () => {
  console.log('服务已启动')
})
server.on('connection', (socket) => {
  console.log('有新的客户端连接')
  socket.on('data', (data) => {
    console.log(data.toString())
    socket.write('hello client!!')
  })
  socket.on('end', () => {
    console.log('连接已关闭')
  })
})