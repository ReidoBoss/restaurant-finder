import vine from '@vinejs/vine'

export const RestaurantParamsSchema = vine.compile(
  vine.object({
    query: vine.string().optional(),
    radius: vine.number().max(100000).optional(),
    min_price: vine.number().min(1).max(4).optional(),
    max_price: vine.number().min(1).max(4).optional(),
    open_at: vine.string().optional(),
    open_now: vine.boolean().optional(),
    tel_format: vine.enum(['NATIONAL', 'E164']).optional(),
    near: vine.string().optional(),
    sort: vine.enum(['RELEVANCE', 'RATING', 'DISTANCE', 'POPULARITY']).optional(),
    limit: vine.number().min(1).max(50).optional(),
  })
)
