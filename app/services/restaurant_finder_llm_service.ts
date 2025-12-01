import env from '#start/env'
import { inject } from '@adonisjs/core'
import { GoogleGenAI } from '@google/genai'
import { instructions as restaurantFinderInstruction } from '#utils/restaurant_finder_instruction'
import { RestaurantParamsSchema } from '#validators/restaurant_params'

const ai = new GoogleGenAI({ apiKey: env.get('GEMINI_API_KEY') })

@inject()
export class RestaurantFinderLLM {
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
