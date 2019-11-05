const $request = require('request')
const url = require('url')

const pathMap = new Map()

function talking (request, response) {
  const query = url.parse(request.url, true).query
  // console.log(query)
  if (query && query.text) {
    const data = {
      "reqType":0,
      "perception": {
          "inputText": {
              "text": query.text
          },
          "inputImage": {
              "url": "imageUrl"
          }
      },
      "userInfo": {
          "apiKey": "f4ac271925ab4b36b05d840be52cd8b0",
          "userId": "12345678"
      }
    }
    $request({
      url: "http://openapi.tuling123.com/openapi/api/v2",
      method: "POST",
      headers: {
          "content-type": "application/json",
      },
      body: JSON.stringify(data) 
    }, (error, res, body) => {
      // console.log(error, res, body)
      if (!error && res.statusCode == 200) {
        var head = {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET", "Access-Control-Allow-Headers": "x-requested-with , content-type:", "Content-Type": 'application/json;charset=utf-8'}
        response.writeHead(200, head);
        var obj = JSON.parse(body);
        if (obj && obj.results && obj.results.length >0 && obj.results[0].values) {
          response.write(JSON.stringify(obj.results[0].values));
          response.end();
        } else {
          response.write("{\"text\":\"布吉岛你说的是什么~\"}");
          response.end();
        }
      } else {
        console.log(2222)
        response.writeHead(400);
        response.write("数据异常");
        response.end();
      }
    })
  } else {
    console.log(11111)
    response.writeHead(400)
    response.write('数据异常')
    response.end()
  }
}

function test (request, response) {
  console.log(request.url)
}
pathMap.set('/api/menu/list', test)
pathMap.set('/api/chat', talking)

module.exports.path = pathMap