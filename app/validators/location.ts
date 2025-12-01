import vine from '@vinejs/vine'

export const LocationSchema = vine.object({
  address: vine.string().optional(),
  locality: vine.string().optional(),
  region: vine.string().optional(),
  postcode: vine.string().optional(),
  admin_region: vine.string().optional(),
  post_town: vine.string().optional(),
  po_box: vine.string().optional(),
  country: vine.string().optional(),
  formatted_address: vine.string().optional(),
})
