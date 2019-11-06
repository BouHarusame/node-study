const fs = require('fs')

const config = require('./config')

let pathMap = new Map()

try {
  const files = fs.readdirSync(config.web_path)
  for (let i = 0; i < files.length; i++) {
    const tem = require('./' + config.web_path + '/' + files[i])
    if (tem.path) {
      for ([key, value] of tem.path) {
        if (pathMap.get(key) == null) {
          pathMap.set(key, value)
        } else {
          throw new Error('url 异常：url是' + key)
        }
      }
    }
  }
} catch (error) {
  throw new Error(error)
}
console.log(pathMap)
module.exports = pathMap