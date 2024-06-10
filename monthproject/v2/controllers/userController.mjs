import { readFile } from "node:fs/promises";
import { validationSchema } from "../utils/validationSchema.mjs";
import { userData } from "../utils/database/eventsData.js"
import { checkSchema } from "express-validator";



const dataset = userData
console.log(dataset)


// async function createEvent(data) {
//     const jsonData = JSON.stringify(data, null, 2);
//     await fs.writeFile(path.join(__dirname, "eventsData.json"), jsonData);
//   }
//GET
export const getUsers = (req, res) => {('/api/users',
    checkSchema(validationSchema),
    (req, res) => {
        res.send(dataset)
        console.log(dataset)
    })
}

//getting user per id
export const getUserById = (req, res) => {('/api/users/:id',
    checkSchema(validationSchema),
    (req, res) => {
        const userId = parseInt(req.params.id);
        const findIndex =dataset.findIndex(user => user.id === userId)

        if(findIndex !== -1){
            res.status(200).send(dataset[findIndex]);
        }else{
            res.status(404).send('User not found');
        }
    })
}

//query parameters
export const getUsersByQuery = (req, res) => {('/api/users',
    checkSchema(validationSchema),
    resolveUserByIndex,
    (req, res) => {
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
    }
)
}


//POST
export const createUser =(req, res) => {('/api/users',
    checkSchema(validationSchema),
    async (req, res) => {
        const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()})
            }
            const data = matchedData(req)
            const new_user = {id: dataset[dataset.length -1].id + 1 , ...data}
            dataset.push(new_user)
            await createEvent(dataset);
            return res.status(200).send(new_user)
    })
}

//PATCH
export const patchUser = (req, res) => {('/api/users/:id',
    checkSchema(validationSchema),
    async (req, res) => {
        const { body, params: { id } } = req

        const parseId = parseInt(id)
        if (isNaN(parseId))
            return res.sendStatus(400)

        const findIndex = dataset.findIndex((user) => {
            return user.id === parseId
        })

        if (findIndex === -1)
            return res.sendStatus(404)

        dataset[findIndex] = { ...dataset[findIndex], ...body }
        console.log('user updated')
        await createEvent(dataset);
        return res.sendStatus(200)
    })
}

//PUT
export const putUser = (req, res) => {('/api/users/:id',
    checkSchema(validationSchema),
    resolveUserByIndex,
    async (req, res) => {
        const { body, params: { id } } = req

        const parseId = parseInt(id)
        if (isNaN(parseId))
            return res.sendStatus(400)

        const findIndex = dataset.findIndex((user) => {
            return user.id === parseId
        })

        if (findIndex === -1)
            return res.sendStatus(404)

        dataset[findIndex] = { id: parseId, ...body }
        await createEvent(dataset);
        res.sendStatus(200)
    })
}

//DELETE
export const deleteUser = (req, res) => {('/api/users/:id',
    checkSchema(validationSchema),
    resolveUserByIndex,
    async (req, res) => {
        const { findIndex } = req
        dataset.splice(findIndex, 1)
        await createEvent(dataset);
        res.sendStatus(200)
    })
}

export default {
    getUsers,
    getUserById,
    getUsersByQuery,
    createUser,
    patchUser,
  }
