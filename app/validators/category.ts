import vine from '@vinejs/vine'

export const CategorySchema = vine.object({
  name: vine.string(),
})
