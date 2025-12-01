import env from '#start/env'

import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class ApiSecretMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const { request, response } = ctx
    const query = request.qs()

    const { code } = query

    if (code !== env.get('API_SECRET')) {
      return response.unauthorized({ message: 'api secret invalid' })
    }

    const output = await next()
    return output
  }
}
