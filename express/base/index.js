const express = require('express')
const cookie = require('cookie-parser')
const config = require('./config')
const loader = require('./loader')


const app = new express()

app.use(express.static(config.page_path))
app.use(cookie())

app.get('/api/*', function (request, response, next) {
  if (request.cookies.id) {
    next()
  } else {
     response.redirect('/login.html')
     response.end()
  }
})
app.get('/api/getAllStudent', loader.get('/getAllStudent'))
app.get('/api/addStudent', loader.get('/addStudent'))
app.post('/login', loader.get('/login'))

app.listen(config.port)