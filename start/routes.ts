/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const RestaurantController = () => import('#controllers/restaurant_controller')

router.get('/', async () => {
  return {
    message: 'healthy',
  }
})

router.get('/api/execute', [RestaurantController, 'find']).use(middleware.api_secret())
