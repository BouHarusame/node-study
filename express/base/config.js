const fs = require('fs')

let config = {}

try {
  const conf = fs.readFileSync('./server.conf')
  const configArr = conf.toString().split('\r\n')
  for (let i = 0; i < configArr.length; i++) {
    config[configArr[i].split('=')[0]] = configArr[i].split('=')[1]
  } 
} catch (e) {
  throw new Error(e)
}

module.exports = config