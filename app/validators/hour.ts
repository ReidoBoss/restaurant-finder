import vine from '@vinejs/vine'

const RegularOperatingHours = vine.object({
  close: vine.string(),
  day: vine.number(),
  open: vine.string(),
})

export const HourSchema = vine.object({
  display: vine.string(),
  is_local_holiday: vine.boolean(),
  open_now: vine.boolean(),
  regular: vine.array(RegularOperatingHours),
})
