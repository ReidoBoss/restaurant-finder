import { RestaurantService } from '#services/restaurant_service'
import { inject } from '@adonisjs/core'

import type { HttpContext } from '@adonisjs/core/http'
import { StringSchema } from '#validators/common'

@inject()
export default class Restaurantsontroller {
  constructor(protected restaurantService: RestaurantService) {}

  async find(context: HttpContext) {
    const { request, response } = context
    const query = request.qs()
    const { message } = query

    if (!message) {
      return response.badRequest({ message: 'need message query to execute' })
    }

    const validatedMessage = await StringSchema.validate(message)

    return await this.restaurantService.find(validatedMessage, response)
  }
}
