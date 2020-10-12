const jwt = require('jsonwebtoken')
const secret = require('../../config/env.config').jwt_secret

exports.validJWT = (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const authorization = req.headers.authorization.split(' ')
      if (authorization[0] !== 'Bearer') {
        return res.status(401).send()
      } else {
        req.jwt = jwt.verify(authorization[1], secret)
        return next()
      }
    } catch (err) {
      return res.status(403).send()
    }
  } else {
    return res.status(401).send()
  }
}

exports.validPermission = (requiredPermissionLevel) => {
  return (req, res, next) => {
    const userPermissionLevel = parseInt(req.jwt.permission)
    if (userPermissionLevel >= requiredPermissionLevel) {
      return next()
    } else {
      return res.status(403).send()
    }
  }
}
