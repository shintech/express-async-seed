import http from 'http'
import logger from 'winston'
import chalk from 'chalk'
import {getStatusCodeStyle} from 'shintech-utils'

export default function (app, options) {
  const { pkg } = options

  const server = http.Server(app)

  server.on('request', (req, res) => {
    const status = getStatusCodeStyle(res.statusCode, req.method)
    logger[status.level](`${status.code} - ${status.method} => ${req.url} ${status.message}`)
  })

  server.on('listening', () => {
    logger.info(`${chalk.bgBlack.cyan(pkg.name)} version ${chalk.bgBlack.yellow(pkg.version)} is listening on port ${chalk.bgBlack.green(8000)}...`)
  })

  return server
}
