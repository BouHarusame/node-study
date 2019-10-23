const mysql = require('mysql')

// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   port: '3306',
//   user: 'root',
//   password: 'bq123456',
//   database: 'school'
// })
// const querySql = 'select * from student;'
// connection.connect()
// connection.query(querySql, function (err, data) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// connection.end()

function createConnection() {
  var connection  = mysql.createConnection({
      host: "127.0.0.1",
      port: "3306",
      user: "root",
      password: "bq123456",
      database: "school"
  });

  return connection;
}

module.exports.createConnection = createConnection