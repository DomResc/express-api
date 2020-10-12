const jwtSecret = require('../../config/env.config').jwt_secret
const jwt = require('jsonwebtoken')

exports.login = (req, res) => {
  try {
    const token = jwt.sign(req.body, jwtSecret)
    res.status(201).send({ accessToken: token })
  } catch (err) {
    res.status(500).send({ errors: err })
  }
}
