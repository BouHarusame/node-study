const http = require('http')
const url = require('url')
const fs = require('fs')
const config = require('./config')
http.createServer((request, response) => {
  // console.log(request)
  // console.log(request.url)
  const pathName = url.parse(request.url).pathname
  const params = url.parse(request.url, true).query
  const isStatic = isStaticRequest(pathName)
  if (isStatic) {
    try {
      console.log(config['page_path'] + pathName)
      const data = fs.readFileSync(config['page_path'] + pathName)
      response.writeHead(200)
      response.write(data)
      response.end()
    } catch (err) {
      response.writeHead(404)
      response.write('<html><body><h1>404 Not Found</h1></body></html>')
      response.end()
    }
  } else {
    console.log(pathName)
  }
}).listen(config['port'])

function isStaticRequest (pathName) {
  for(let i = 0; i < config.static_file_type.length; i++) {
    let tem = config.static_file_type[i]
    if (pathName.indexOf(tem) == pathName.length - tem.length) {
      return true
    }
  }
  return false
}