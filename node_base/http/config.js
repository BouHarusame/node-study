const fs = require('fs')
let config = {}
try {
  const data = fs.readFileSync('./server.config')
  const dataArr = data.toString().split('\r\n')
  for (let i = 0; i < dataArr.length; i++) {
    config[dataArr[i].split('=')[0]] = dataArr[i].split('=')[1]
  }
  if (config.static_file_type) {
    config.static_file_type = config.static_file_type.split('|')
  } else {
    throw new Error('配置文件异常，缺少：static_file_type')
  }
} catch (err) {
  console.log(err)
}
module.exports = config