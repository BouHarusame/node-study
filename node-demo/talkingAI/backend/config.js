const fs = require('fs')

let pathConfig = {}
try{
  const config = fs.readFileSync('./server.conf')
  const pathArr = config.toString().split('\r\n')
  for(let i = 0; i < pathArr.length; i++) {
    pathConfig[pathArr[i].split('=')[0]] = pathArr[i].split('=')[1]
  }
  if (pathConfig.static_file_type) {
    pathConfig.static_file_type = pathConfig.static_file_type.split('|')
  } else {
    throw new Error("配置文件异常，缺少:static_file_type");
  }
} catch (err) {
  throw new Error(err);
}

module.exports = pathConfig