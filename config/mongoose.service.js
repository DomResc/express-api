const config = require('./env.config')
const mongoose = require('mongoose')

let count = 0

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: config.mongo_user,
  pass: config.mongo_pass
}
const connectWithRetry = () => {
  console.log('MongoDB connection...')
  mongoose
    .connect(
      'mongodb://127.0.0.1:27017/DB?authSource=admin',
      options
    )
    .then(() => {
      console.log('MongoDB is connected')
    })
    .catch((err) => {
      console.log(
        `MongoDB connection unsuccessful: ${err}, retry after 5 seconds. `,
        ++count
      )
      setTimeout(connectWithRetry, 5000)
    })
}

connectWithRetry()

exports.mongoose = mongoose
