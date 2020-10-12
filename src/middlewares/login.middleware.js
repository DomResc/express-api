const defaultUsers = require('../../config/env.config').users

exports.hasValidFields = (req, res, next) => {
  const errors = []

  if (JSON.stringify(req.body) !== '{}') {
    if (!req.body.username) {
      errors.push('Missing username')
    }
    if (!req.body.password) {
      errors.push('Missing password')
    }

    if (errors.length) {
      return res.status(400).send({ errors: errors.join(',') })
    } else {
      return next()
    }
  } else {
    return res.status(400).send({ errors: 'Username and Password are missing' })
  }
}

exports.isUsernameAndUserMatch = (req, res, next) => {
  const result = defaultUsers.find(
    ({ username }) => username === req.body.username
  )

  if (!result) {
    return res.status(400).send({ errors: 'Username and Password are invalid' })
  } else {
    if (req.body.password === result.password) {
      req.body = {
        username: result.username,
        permission: result.permission
      }
      return next()
    } else {
      return res.status(400).send({ errors: 'Username and Password are invalid' })
    }
  }
}
