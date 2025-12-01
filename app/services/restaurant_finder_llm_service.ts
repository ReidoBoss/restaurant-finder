import env from '#start/env'
import { inject } from '@adonisjs/core'
import { GoogleGenAI } from '@google/genai'
import { instructions as restaurantFinderInstruction } from '#utils/restaurant_finder_instruction'
import { RestaurantParamsSchema } from '#validators/restaurant_params'

const ai = new GoogleGenAI({ apiKey: env.get('GEMINI_API_KEY') })

@inject()
export class RestaurantFinderLLM {
  /**
   * Sends a natural-language question to the LLM and parses the response
   * into a `RestaurantParams` object.
   *
   * The question should describe the restaurant query in plain text, for example:
   * ```
   * Find me a cheap sushi restaurant in downtown Los Angeles that's open now
   * and has at least a 4-star rating.
   * ```
   *
   * @param question - A natural-language query describing the restaurant search.
   *
   * @returns A Promise that resolves to a `RestaurantParams` object, validated
   *          against `RestaurantParamsSchema`.
   *
   *
   * @example
   * const restaurantParams = await service.ask(
   *   "Find me an unli chicken place within 1km of Cebu Osmena Circle that accepts credit card and has parking"
   * );
   */
  async ask(question: string): Promise<RestaurantParams> {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'model', parts: [{ text: restaurantFinderInstruction }] },
        { role: 'user', parts: [{ text: question }] },
      ],
    })
    const { text } = response
    const convertedJson = JSON.parse(text || '{}')
    return RestaurantParamsSchema.validate(convertedJson)
  }
}
