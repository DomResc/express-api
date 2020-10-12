// General require
const port = require('./config/env.config.js').port

// Express module
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Express route
const LoginRoute = require('./src/routes/login.route')
const SomethingRoute = require('./src/routes/something.route')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header('Access-Control-Expose-Headers', 'Content-Length')
  res.header(
    'Access-Control-Allow-Headers',
    'Accept, Authorization, Content-Type, X-Requested-With, Range'
  )
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  } else {
    return next()
  }
})

app.use(bodyParser.json())

LoginRoute.routesConfig(app)
SomethingRoute.routesConfig(app)

app.listen(port, function () {
  console.log('Port: %s', port)
})
