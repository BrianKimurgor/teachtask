import { validationResult, matchedData } from 'express-validator'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET all users
export const getUsers = async (req, res) => {
  try {
    console.log('Fetching all users...')
    const allUsers = await prisma.user.findMany()
    return res.json(allUsers)
  } catch (error) {
    console.error('Error fetching all users:', error)
  }
}

// GET user by ID
export const getUserById = async (req, res) => {
  const userId = parseInt(req.params.id)
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' })
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (user) {
      res.json(user)
    } else {
      res.status(404).json({ error: 'User not found' })
    }
  } catch (error) {
    console.error('Error fetching user by ID:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

// GET users by query
export const getUsersByQuery = async (req, res) => {
  const { username } = req.query

  try {
    if (username) {
      const user = await prisma.user.findUnique({
        where: { username }
      })

      if (user) {
        res.json(user)
      } else {
        res.status(404).json({ error: 'User not found with the provided username' })
      }
    } else {
      res.status(400).json({ error: 'Bad Request: Missing username parameter' })
    }
  } catch (error) {
    console.error('Error fetching user by query:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

// POST create new user
export const createUser = async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    console.log('Validation errors:', errors.array())
    return res.status(400).json({ errors: errors.array() })
  }

  // Extract and log matched data
  const data = matchedData(req)
  const { username, displayname } = data
  console.log('Received data:', data)

  // Attempt to create a new user
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        displayname
      }
    })
    console.log('User created:', newUser)
    res.status(201).json(newUser)
  } catch (error) {
    console.error('Error creating new user:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

// PATCH update user partially
export const patchUser = async (req, res) => {
  const userId = parseInt(req.params.id)
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' })
  }

  const { body } = req
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: body
    })

    res.status(200).json(updatedUser)
  } catch (error) {
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'User not found' })
    } else {
      console.error('Error updating user:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}

// PUT update user fully
export const putUser = async (req, res) => {
  const userId = parseInt(req.params.id)
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' })
  }

  const { body } = req
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: body
    })

    res.status(200).json(updatedUser)
  } catch (error) {
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'User not found' })
    } else {
      console.error('Error updating user:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}

// DELETE user
export const deleteUser = async (req, res) => {
  const userId = parseInt(req.params.id)
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' })
  }

  try {
    await prisma.user.delete({
      where: { id: userId }
    })

    res.status(204).send()
  } catch (error) {
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'User not found' })
    } else {
      console.error('Error deleting user:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}

export const userController = {
  getUsers,
  getUserById,
  getUsersByQuery,
  createUser,
  patchUser,
  putUser,
  deleteUser
}
