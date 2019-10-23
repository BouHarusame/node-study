// const url = require('url')
const studentService = require('../service/studentService')

const path = new Map()

function getData(request, response) {
  response.writeHead(200)
  response.write('login')
  response.end()
}
path.set('/getData', getData)

function login(request, response) {
  request.on("data", function(data){
    if (data.toString()) {
      console.log(data.toString(), 23232)
      const {studentNum, password} = JSON.parse(data.toString())
      // const password = data.toString().password
      console.log(studentNum, password)
      studentService.queryStudentByStudentNum(studentNum, function (result) {
        let res = ''
        if (result == null || result.length == 0) {
          res = 'fail'
        } else {
          if (result[0].password == password) {
            res = 'success'
          } else {
            res = 'fail'
          }
        }
        response.write(res)
        response.end()
      })
    }
  })
}


path.set('/login', login)

module.exports.path = path