const Bree = require('bree')

const bree = new Bree({
  logger: console,
  jobs: [
    {
      name: 'worker',
      interval: '1m'
    }
  ]
})

bree.start()
