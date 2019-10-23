const fs = require('fs')
const config = require('./config')

let controllerSet = []
let pathMap = new Map()
console.log(config['web_path'])
try {
  const files = fs.readdirSync(config['web_path'])
  for (let i = 0; i < files.length; i++) {
    const temp = require('./' + config['web_path'] + '/' + files[i])
    if (temp.path) {
      for (let [key, value] of temp.path) {
        if (pathMap.get(key) == null) {
          pathMap.set(key, value)
        } else {
          throw new Error('url path 异常，url:' + key)
        }
        controllerSet.push(temp)
      }
    }
  }
} catch (err) {
  console.log(err)
}
console.log(pathMap)
module.exports = pathMap
