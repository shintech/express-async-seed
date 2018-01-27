const path = require('path')
const logger = require('winston')
require('babel-polyfill')

const options = {
  pkg: require(path.join(__dirname, 'package.json')),
  logger: logger,
  port: process.env['PORT']
}

const application = require(path.join(__dirname, 'build'))

application.start(options)
.then(server => {
  server.listen(options.port)
})
.catch(err => {
  logger.error(err)
})
