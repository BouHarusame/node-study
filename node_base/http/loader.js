const fs = require('fs')
const config = require('./config')

let controllerSet = []
const files = readFileSync(config['web_path'])
for (let i = 0; i < files.length; i++) {
  const temp = require('./' + config['web_path'] + '/' + files[i])
  if (temp.path) {
    controllerSet.push(temp)
  }
}
console.log(controllerSet)