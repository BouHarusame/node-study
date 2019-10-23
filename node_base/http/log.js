const fs = require('fs')
const config = require('./config')

const filename = config.log_path + '/' + config.log_name

function log (data) {
  console.log(filename)
  fs.writeFile(filename, data + '\n', {flag: 'a'}, function () {
    console.log(1111)
  })
}

module.exports = log