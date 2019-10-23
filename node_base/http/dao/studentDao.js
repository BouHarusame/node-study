const dbConnection = require('./dbConnection')

function queryAllStudent() {
  const querySql = 'select * from student;'
  const connection = dbConnection.createConnection()
  connection.connect()
  connection.query(querySql, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
      // success(data)
    }
  })
  connection.end()
}
function queryStudentByStudentNum(studentNum, success) {
  const querySql = 'select * from student where studentNum = ?;'
  const connection = dbConnection.createConnection()
  connection.connect()
  connection.query(querySql, studentNum, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
      success(data)
    }
  })
  connection.end()
}
// queryAllStudent()

module.exports = {
  queryAllStudent,
  queryStudentByStudentNum
}