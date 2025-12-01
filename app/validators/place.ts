import vine from '@vinejs/vine'
import { LocationSchema } from '#validators/location'
import { CategorySchema } from '#validators/category'
import { HourSchema } from '#validators/hour'

export const PlaceSearchResultSchema = vine.compile(
  vine.array(
    vine.object({
      name: vine.string().nullable().optional(),
      location: LocationSchema,
      menu: vine.string().nullable().optional(),
      date_closed: vine.string().nullable().optional(),
      distance: vine.number().nullable().optional(),
      categories: vine.array(CategorySchema),
      price: vine.number().nullable().optional(),
      hours: HourSchema.nullable().optional(),
    })
  )
)
