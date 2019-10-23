const fs = require('fs');

// 读文件
// fs.readFile('./hello.txt', 'utf-8', (err, data) => {
//   console.log(err, data)
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// console.log(123)

// try {
//   const res = fs.readFileSync('./hello.txt', 'utf-8')
//   console.log(res)
//   console.log(6666)
// } catch (err) {
//   console.log(err)
// }


//写文件
// const content = '2343435'
// fs.writeFile('./content.txt', content, 'utf-8', (err) => {
//   if (err) throw err
//   console.log('写入成功！')
// })

// 重命名
// fs.rename('./content.txt', './con.text', (err) => {
//   if (err) throw err
//   console.log('重命名成功')
// })

// 获取文件信息
// fs.stat('hello.txt', function (err, stat) {
//   if (err) {
//       console.log(err);
//   } else {
//       // 是否是文件:
//       console.log('isFile: ' + stat.isFile());
//       // 是否是目录:
//       console.log('isDirectory: ' + stat.isDirectory());
//       if (stat.isFile()) {
//           // 文件大小:
//           console.log('size: ' + stat.size);
//           // 创建时间, Date对象:
//           console.log('birth time: ' + stat.birthtime);
//           // 修改时间, Date对象:
//           console.log('modified time: ' + stat.mtime);
//       }
//   }
// });

//删除文件
fs.unlink('./con.text', (err) => {
  if (err) throw err
  console.log('删除成功')
})