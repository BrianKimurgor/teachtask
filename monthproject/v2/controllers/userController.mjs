import { checkSchema, validationResult, matchedData } from "express-validator";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET all users
export const getUsers = async (req, res) => {
    try {
        console.log("users");
        const allUsers = await prisma.user.findMany({
            include: {
                username: true,
                displayname: true,
            }
    });
    console.dir(allUsers, {depth: null})
        res.json(allUsers);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// GET user by ID
export const getUserById = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// GET users by query
export const getUsersByQuery = async (req, res) => {
    const { username } = req.query;

    try {
        if (username) {
            const user = await prisma.user.findUnique({
                where: { username: username },
            });

            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: 'User not found with the provided username' });
            }
        } else {
            res.status(400).json({ error: 'Bad Request: Missing username parameter' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// POST create new user
export const createUser = async (req, res) => {
    try {
        const {username, displayname} = req.body
        const newUser = await prisma.user.create({
            data: {
                username,
                displayname
            }
        });
        console.log(newUser)
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// PATCH update user partially
export const patchUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    const { body } = req;

    try {
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: body,
        });

        res.status(200).json(updatedUser);
    } catch (error) {
        if (error.code === 'P2025') { // P2025 is the Prisma error code for "Record to update not found."
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

// PUT update user fully
export const putUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    const { body } = req;

    try {
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: body,
        });

        res.status(200).json(updatedUser);
    } catch (error) {
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

// DELETE user
export const deleteUser = async (req, res) => {
    const userId = parseInt(req.params.id);

    try {
        await prisma.user.delete({
            where: { id: userId },
        });

        res.status(204).send();
    } catch (error) {
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

export const userController = {
    getUsers,
    getUserById,
    getUsersByQuery,
    createUser,
    patchUser,
    putUser,
    deleteUser
};
