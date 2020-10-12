const SomethingController = require('../controllers/something.controller')
const SomethingMiddleware = require('../middlewares/something.middleware')
const ValidationMiddleware = require('../middlewares/validation.middleware')
const config = require('../../config/env.config')

const ADMIN = config.permission.ADMIN
const USER = config.permission.USER

exports.routesConfig = function (app) {
  app.post('/something', [
    ValidationMiddleware.validJWT,
    ValidationMiddleware.validPermission(ADMIN),
    SomethingMiddleware.hasValidFieldsCreate,
    SomethingController.create
  ])
  app.get('/something', [
    ValidationMiddleware.validJWT,
    ValidationMiddleware.validPermission(USER),
    SomethingController.list
  ])
  app.get('/something/:somethingId', [
    ValidationMiddleware.validJWT,
    ValidationMiddleware.validPermission(USER),
    SomethingMiddleware.hasValidFieldsGetPatch,
    SomethingController.getById
  ])
  app.patch('/something/:somethingId', [
    ValidationMiddleware.validJWT,
    ValidationMiddleware.validPermission(ADMIN),
    SomethingMiddleware.hasValidFieldsGetPatch,
    SomethingController.patchById
  ])

  app.delete('/something/:somethingId', [
    ValidationMiddleware.validJWT,
    ValidationMiddleware.validPermission(ADMIN),
    SomethingMiddleware.hasValidFieldsGetPatch,
    SomethingController.removeById
  ])
}
