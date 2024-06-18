import { userData as dataset } from '../utils/database/eventsData.js'

export const resolveUserByIndex = (req, res, next) => {
  const { params: { id } } = req
  const parseId = parseInt(id)
  if (isNaN(parseId)) return res.sendStatus(400)

  const findIndex = dataset.findIndex((user) => user.id === parseId)
  if (findIndex === -1) return res.sendStatus(404)

  req.findIndex = findIndex

  next()
}
