import { RestaurantParamsSchema } from '#validators/restaurant_params'
import { Infer } from '@vinejs/vine/types'

export {}

declare global {
  type RestaurantParams = Infer<typeof RestaurantParamsSchema>
}
