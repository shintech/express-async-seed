import {Router} from 'express'
import {home} from './routes'

const router = Router()

export default function (options) {
  router.route('/home')
  .get(home(options).home)

  return router
}
