import configApp from './app'
import configServer from './server'
import configRouter from './router'

export function start (options, callback) {
  const app = configApp(options)
  const server = configServer(app, options)
  const router = configRouter(options)

  app.use('/api', router)

  app.get('/', (req, res) => {
    let message = `${res.statusCode}: Success...`

    res.render('index', {
      title: 'Success',
      heading: 'Success',
      url: req.url,
      status: res.statusCode,
      message: message
    })
  })

  app.use(function (req, res) {
    res.status(400)
    .format({
      json: () => {
        res.send({
          url: req.url,
          status: res.statusCode,
          message: `${res.statusCode}: Not found...`
        })
      },
      html: () => {
        res.render('error', {
          title: 'Error',
          heading: 'Error',
          url: req.url,
          status: res.statusCode,
          message: `${res.statusCode}: Not found...`
        })
      }
    })
  })

  return Promise.resolve(server)
}
