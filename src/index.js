import configApp from './app'
import configServer from './server'
import configRouter from './router'

export async function start (options) {
  const app = configApp(options)
  const server = configServer(app, options)
  const router = configRouter(options)

  app.use('/api', router)

  app.use(function (req, res) {
    res.status(400)
    .json({
      status: 'error',
      message: '404: Not Found'
    })
  })

  return Promise.resolve(server)
}
