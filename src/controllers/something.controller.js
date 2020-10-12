const SomethingModel = require('../models/something.model')

exports.create = (req, res) => {
  SomethingModel.create(req.body).then((result) => {
    res.status(201).send({ id: result._id })
  })
}

exports.list = (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 10
  let page = 0
  if (req.query) {
    if (req.query.page) {
      req.query.page = parseInt(req.query.page)
      page = Number.isInteger(req.query.page) ? req.query.page : 0
    }
  }
  SomethingModel.list(limit, page).then((result) => {
    res.status(200).send(result)
  })
}

exports.getById = (req, res) => {
  SomethingModel.getById(req.params.somethingId).then((result) => {
    res.status(200).send(result)
  })
}

exports.patchById = (req, res) => {
  SomethingModel.getById(req.params.somethingId).then((result) => {
    if (result) {
      SomethingModel.patchById(req.params.somethingId, req.body).then(
        (result) => {
          res.status(204).send(result)
        }
      )
    } else {
      res.status(400).send({ errors: 'Invalid ID' })
    }
  })
}

exports.removeById = (req, res) => {
  SomethingModel.getById(req.params.somethingId).then((result) => {
    if (result) {
      SomethingModel.removeById(req.params.somethingId).then((result) => {
        res.status(204).send(result)
      })
    } else {
      res.status(400).send({ errors: 'Invalid ID' })
    }
  })
}
