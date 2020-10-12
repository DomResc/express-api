const mongoose = require('../../config/mongoose.service').mongoose
const Schema = mongoose.Schema

const somethingSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true
  }
)

const Something = mongoose.model('Something', somethingSchema)

exports.create = (somethingData) => {
  const something = new Something(somethingData)
  return something.save()
}

exports.list = (perPage, page) => {
  return new Promise((resolve, reject) => {
    Something.find()
      .limit(perPage)
      .skip(perPage * page)
      .exec((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
  })
}

exports.getById = (id) => {
  return new Promise((resolve, reject) => {
    Something.findById(id, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

exports.patchById = (id, somethingData) => {
  return new Promise((resolve, reject) => {
    Something.findById(id, (err, res) => {
      if (err) {
        reject(err)
      } else {
        for (const i in somethingData) {
          res[i] = somethingData[i]
        }
        res.save((err, somethingNew) => {
          if (err) {
            return reject(err)
          } else {
            resolve(somethingNew)
          }
        })
      }
    })
  })
}

exports.removeById = (somethingId) => {
  return new Promise((resolve, reject) => {
    Something.deleteOne({ _id: somethingId }, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(err)
      }
    })
  })
}
