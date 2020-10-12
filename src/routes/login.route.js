const LoginMiddleware = require('../middlewares/login.middleware')
const LoginController = require('../controllers/login.controller')

exports.routesConfig = function (app) {
  app.post('/login', [
    LoginMiddleware.hasValidFields,
    LoginMiddleware.isUsernameAndUserMatch,
    LoginController.login
  ])
}
