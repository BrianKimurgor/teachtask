import express from 'express'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { isUtf8 } from 'node:buffer'
import { query, validationResult, matchedData, body, checkSchema } from 'express-validator'
import { validationSchema } from '../utils/validationSchema.mjs'
import fs from 'fs/promises'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const data = await readFile(path.join(__dirname, 'eventsData.json'), 'utf-8')
const dataset = JSON.parse(data)

// console.log(data)
async function createEvent (data) {
  const jsonData = JSON.stringify(data, null, 2)
  await fs.writeFile(path.join(__dirname, 'eventsData.json'), jsonData)
}

// middleware
const middleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
}

const resolveUserByIndex = (req, res, next) => {
  const { body, params: { id }, query: { filter, value } } = req
  const parseId = parseInt(id)
  if (isNaN(parseId)) return res.sendStatus(400)

  const findIndex = dataset.findIndex((user) => {
    return user.id === parseId
  })

  const newUser = { id: dataset[dataset.length - 1].id + 1, ...body }
  dataset.push(newUser)

  if (filter && value) { return res.send(dataset.filter(user => user[filter].includes(value))) }

  if (findIndex === -1) return res.sendStatus(404)

  req.findIndex = findIndex

  next()
}

const app = express()
app.use(express.json())
app.use(middleware)

// GET
app.get('/',
  checkSchema(validationSchema),
  (req, res) => {
    res.send(dataset)
  })

// getting all users
app.get('/api/users',
  checkSchema(validationSchema),
  (req, res) => {
    res.send(dataset)
  })

// getting user per id
app.get('/api/users/:id',
  checkSchema(validationSchema),
  (req, res) => {
    const userId = parseInt(req.params.id)
    const findIndex = dataset.findIndex(user => user.id === userId)

    if (findIndex !== -1) {
      res.status(200).send(dataset[findIndex])
    } else {
      res.status(404).send('User not found')
    }
  })

// query parameters
app.get('/api/users',
  checkSchema(validationSchema),
  resolveUserByIndex,
  (req, res) => {
    const { username } = req.query

    if (username) {
      const filteredUser = dataset.find(user => user.username === username)
      if (filteredUser) {
        return res.send(filteredUser)
      } else {
        return res.status(404).send('User not found with the provided username')
      }
    } else {
      return res.status(400).send('Bad Request: Missing username parameter')
    }
  }
)

// POST
app.post('/api/users',
  checkSchema(validationSchema),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const data = matchedData(req)
    const new_user = { id: dataset[dataset.length - 1].id + 1, ...data }
    dataset.push(new_user)
    await createEvent(dataset)
    return res.status(200).send(new_user)
  })

// PATCH
app.patch('/api/users/:id',
  checkSchema(validationSchema),
  async (req, res) => {
    const { body, params: { id } } = req

    const parseId = parseInt(id)
    if (isNaN(parseId)) { return res.sendStatus(400) }

    const findIndex = dataset.findIndex((user) => {
      return user.id === parseId
    })

    if (findIndex === -1) { return res.sendStatus(404) }

    dataset[findIndex] = { ...dataset[findIndex], ...body }
    console.log('user updated')
    await createEvent(dataset)
    return res.sendStatus(200)
  })

// PUT
app.put('/api/users/:id',
  checkSchema(validationSchema),
  resolveUserByIndex,
  async (req, res) => {
    const { body, params: { id } } = req

    const parseId = parseInt(id)
    if (isNaN(parseId)) { return res.sendStatus(400) }

    const findIndex = dataset.findIndex((user) => {
      return user.id === parseId
    })

    if (findIndex === -1) { return res.sendStatus(404) }

    dataset[findIndex] = { id: parseId, ...body }
    await createEvent(dataset)
    res.sendStatus(200)
  })

// DELETE
app.delete('/api/users/:id',
  checkSchema(validationSchema),
  resolveUserByIndex,
  async (req, res) => {
    const { findIndex } = req
    dataset.splice(findIndex, 1)
    await createEvent(dataset)
    res.sendStatus(200)
  })

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
