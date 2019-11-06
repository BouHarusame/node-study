const dbConnection = require('./dbConnection')

function queryAllStudent (success) {
  const querySql = 'select * from student'
  const connection = dbConnection.createConnection()
  connection.connect()
  connection.query(querySql, function (error, data) {
    if (error) {
      throw new Error(error)
    } else {
      success(data)
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

function addStudent (studentNum, name, password, success) {
  const insertSql = 'insert into student (studentNum, name, password) values (?,?,?);'
  const connection = dbConnection.createConnection()
  connection.connect()
  connection.query(insertSql, [studentNum, name, password], function (error, data) {
    if (error) {
      throw new Error(error)
    } else {
      success(data)
    }
  })
}
module.exports = {
  queryAllStudent,
  queryStudentByStudentNum,
  addStudent
}