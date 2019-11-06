const url = require('url')
const studentDao = require('../dao/studentDao')

let path = new Map()

function getAllStudent (request, response) {
  studentDao.queryAllStudent(function (result) {
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"}  )
    response.write(JSON.stringify(result))
    response.end()
  })
}

path.set('/getAllStudent', getAllStudent)

function login(request, response) {
  request.on("data", function(data){
    if (data.toString()) {
      const {studentNum, password} = JSON.parse(data.toString())
      studentDao.queryStudentByStudentNum(studentNum, function (result) {
        if (result[0].password == password) {
          response.cookie('id', result[0].id)
          response.redirect('/index.html')
          // response.end()
        } else {
          response.redirect('/login.html')
          response.end()
        }
      })
    }
  })
}


path.set('/login', login)


function addStudent (request, response) {
  let params = url.parse(request.url, true).query
  console.log(params)
  studentDao.addStudent(params.studentNum, params.name, params.password, function (result) {
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"}  )
    response.write('添加成功')
    response.end()
  })
}
path.set('/addStudent', addStudent)


module.exports.path = path