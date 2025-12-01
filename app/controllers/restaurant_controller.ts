import type { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'

export default class Restaurantsontroller {
  async find(context: HttpContext) {
    const { request, response } = context
    const query = request.qs()

    const { message, code } = query

    if (code !== env.get('API_SECRET')) {
      return response.unauthorized({ message: 'api secret invalid' })
    }

    if (!message) {
      return response.badRequest({ message: 'need message query to execute' })
    }
  }
}
