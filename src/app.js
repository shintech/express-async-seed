import express from 'express'
import bodyParser from 'body-parser'

const app = express()

export default function (options) {
  const { logger } = options

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.on('error', err => {
    logger.error(err)
  })

  return app
}
