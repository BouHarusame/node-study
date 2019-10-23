const studentDao = require('../dao/studentDao')

function queryStudentByStudentNum(studentNum, success) {
  studentDao.queryStudentByStudentNum(studentNum, success)
}

module.exports = {
  queryStudentByStudentNum
}