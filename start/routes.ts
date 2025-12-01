/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const RestaurantController = () => import('#controllers/restaurant_controller')

router.get('/', async () => {
  return {
    message: 'healthy',
  }
})

router.get('/api/execute', [RestaurantController, 'find'])
