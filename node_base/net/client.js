const net = require('net')
// const client = net.connect({port: 8080}, () => {
//   console.log('连接到服务器')
//   client.write('查看\r\n')
// })
// client.on('data', data => {
//   console.log(data.toString())
//   client.end()
// })
// client.on('end', () => {
//   console.log('服务器已关闭')
// })

const client = net.connect(12306, '127.0.0.1')
client.setTimeout(2000)
client.on('timeout', () => {
  console.log('请求超时了')
  client.end()
})
client.on('connect', () => {
  console.log('连接到服务器')
})
// client.on('data', (data) => {
//    console.log(data.toString())
//    console.log(client.localAddress)
//    console.log(client.localPort)
//    console.log(client.remoteAddress)
//    console.log(client.remotePort)
//    client.end()
// })
// client.on('end', () => {
//   console.log('客户端已关闭')
// })
// client.write('hello server!')