import express from 'express'
import { userController } from '../controllers/userController.mjs'
import { resolveUserByIndex } from '../middlewares/resolveuser.mjs'
import { checkSchema } from 'express-validator'
import { validationSchema } from '../utils/validationSchema.mjs'
import cookieMiddleware from '../middlewares/cookieMiddleWare.mjs'
import bodyParser from 'body-parser'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

// Test the database connection
prisma.$connect()
  .then(() => {
    console.log('Database connected')
  })
  .catch((error) => {
    console.error('Error connecting to database:', error)
  })

app.use(bodyParser.json())

const router = express.Router()

// GET users
router.get('/users', cookieMiddleware, userController.getUsers)

// GET user by ID
router.get('/users/:id', cookieMiddleware, resolveUserByIndex, userController.getUserById)

// GET users by query
router.get('/users', userController.getUsersByQuery)

// POST create new user
router.post('/users', checkSchema(validationSchema), userController.createUser)

// PATCH update user partially
router.patch('/users/:id', checkSchema(validationSchema), resolveUserByIndex, userController.patchUser)

// PUT update user fully
router.put('/users/:id', checkSchema(validationSchema), resolveUserByIndex, userController.putUser)

// DELETE user
router.delete('/users/:id', checkSchema(validationSchema), resolveUserByIndex, userController.deleteUser)

export default router
