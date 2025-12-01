import { inject } from '@adonisjs/core'
import type { Response } from '@adonisjs/core/http'

@inject()
export class RestaurantService {
  async find(message: string, response: Response) {
    response.ok({ meow: message })
  }
}
