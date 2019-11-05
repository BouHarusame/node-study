const http = require('http')
const url = require('url')
const fs = require('fs')
const config = require('./config')
var loader = require("./loader");
var log = require("./log");

http.createServer((request, response) => {
  const pathName = url.parse(request.url).pathname
  log(pathName);
  const isStatic = isStaticRequest(pathName)
  if (isStatic) {
    try {
      const data = fs.readFileSync('../' + config.page_path + pathName)
      response.writeHead(200)
      response.write(data)
      response.end()
    } catch (err) {
      response.writeHead(404)
      response.write('<html><body><h1>Not Found</h1></body></html')
      response.end()
    }
  } else {
    if (loader.get(pathName) != null) {
      try {
          loader.get(pathName)(request, response);
      } catch (e) {
          // console.log(e);
          response.writeHead(500);
          response.write("<html><body><h1>500 BadServer</h1></body></html>");
          response.end();
      }
    } else {
        for(var temp of loader){
            if (new RegExp("^" + temp[0] + "$").test(pathName)) {
                temp[1](request, response);
                return;
            }
        }
        response.writeHead(404);
        response.write("<html><body><h1>404 NotFound</h1></body></html>");
        response.end();
    }
  }
}).listen(config.port, config.host)
log('服务已启动');
function isStaticRequest(pathName) {
  var tem = config.static_file_type
  for(let i = 0; i < tem.length; i++) {
    if (pathName.indexOf(tem[i]) === pathName.length - tem[i].length) {
      return true
    }
  }
  return false
}