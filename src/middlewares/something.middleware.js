exports.hasValidFieldsCreate = (req, res, next) => {
  const errors = []

  if (JSON.stringify(req.body) !== '{}') {
    if (!req.body.name) {
      errors.push('Missing name')
    }

    if (errors.length) {
      return res.status(400).send({ errors: errors.join(',') })
    } else {
      return next()
    }
  } else {
    return res
      .status(400)
      .send({ errors: 'Missing name' })
  }
}

exports.hasValidFieldsGetPatch = (req, res, next) => {
  if (req.params.somethingId && req.params.somethingId.length === 24) {
    return next()
  } else {
    return res.status(400).send({ errors: 'Invalid ID' })
  }
}
