import axios from 'axios'
import env from '#start/env'
import { inject } from '@adonisjs/core'

import type { Response } from '@adonisjs/core/http'
import { RestaurantFinderLLM } from '#services/restaurant_finder_llm_service'
import { PlaceSearchResultSchema } from '#validators/place'

const FSQR_API_URL = env.get('FSQR_API_URL')
@inject()
export class RestaurantService {
  constructor(protected finderLLM: RestaurantFinderLLM) {}
  /**
   *
   * @param message - The natural language query to ask the LLM.
   *   Example:
   *   ```
   *   Find me a cheap sushi restaurant in downtown Los Angeles that's open now
   *   and has at least a 4-star rating.
   *   ```
   *
   * @param response - The HTTP response object used to send back results.
   */
  async find(message: string, response: Response) {
    const params = await this.finderLLM.ask(message)
    const FSQR_API_KEY = env.get('FSQR_API_KEY')
    const FSQR_API_VERSION = env.get('FSQR_API_VERSION')
    const result = await axios.get(`${FSQR_API_URL}/places/search`, {
      params,
      headers: {
        'Content-Type': 'application/json',
        'X-Places-Api-Version': FSQR_API_VERSION,
        'authorization': `Bearer ${FSQR_API_KEY}`,
      },
    })
    const placeSearchResult = await PlaceSearchResultSchema.validate(result.data.results)

    response.ok({
      produced_params: params,
      result: placeSearchResult,
    })
  }
}
