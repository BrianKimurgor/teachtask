import { checkSchema, validationResult, matchedData } from "express-validator";
import { userData as dataset } from "../utils/database/eventsData.js";
// import { createEvent } from "../utils/database.js"; // Assuming this function exists for handling events

// GET all users
export const getUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: { userData: dataset }
    });
};

// GET user by ID
export const getUserById = (req, res) => {
    const findIndex = req.findIndex
    //res.status(200).send(dataset[findIndex])

    if (findIndex !== -1) {
        res.status(200).send(dataset[findIndex]);
    } else {
        res.status(404).send('User not found');
    }
};

// GET users by query
export const getUsersByQuery = (req, res) => {
    const { username } = req.query;

    if (username) {
        const filteredUser = dataset.find(user => user.username === username);
        if (filteredUser) {
            return res.send(filteredUser);
        } else {
            return res.status(404).send('User not found with the provided username');
        }
    } else {
        return res.status(400).send('Bad Request: Missing username parameter');
    }
};

// POST create new user
export const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const data = matchedData(req);
    const new_user = { id: dataset[dataset.length - 1].id + 1, ...data };
    dataset.push(new_user);
    await createEvent(dataset);
    return res.status(200).send(new_user);
};

// PATCH update user partially
export const patchUser = async (req, res) => {
    const { body } = req;
    const findIndex = req.findIndex;

    dataset[findIndex] = { ...dataset[findIndex], ...body };
    console.log('user updated');
    await createEvent(dataset);
    return res.sendStatus(200);
};

// PUT update user fully
export const putUser = async (req, res) => {
    const { body } = req;
    const findIndex = req.findIndex;

    dataset[findIndex] = { id: dataset[findIndex].id, ...body };
    await createEvent(dataset);
    res.sendStatus(200);
};

// DELETE user
export const deleteUser = async (req, res) => {
    const findIndex = req.findIndex;
    dataset.splice(findIndex, 1);
    await createEvent(dataset);
    res.sendStatus(200);
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
