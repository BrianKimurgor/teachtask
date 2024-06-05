import express from "express"
import { readFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import path from "node:path"
import { isUtf8 } from "node:buffer"
import { query, validationResult, matchedData, body, checkSchema } from "express-validator";
import { validationSchema } from '../utils/validationSchema.mjs'


const __dirname = path.dirname(fileURLToPath(import.meta.url))


const data = await readFile(path.join(__dirname, "eventsData.json"), "utf-8")
const dataset = JSON.parse(data)

//console.log(data)

//middleware
const middleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next()
}

const resolveUserByIndex = (req, res, next) => {
    const { body, params: { id }, query: { filter, value } } = req
    const parseId = parseInt(id)
    if (isNaN(parseId)) return res.sendStatus(400);

    const findIndex = dataset.findIndex((user) => {
        return user.id === parseId;
    })

    const newUser = { id: dataset[dataset.length - 1].id + 1, ...body }
        dataset.push(newUser)


    if (filter && value)
        return res.send(dataset.filter(user => user[filter].includes(value)))

    if (findIndex === -1) return res.sendStatus(404)

    req.findIndex = findIndex

    next()
}


const app = express()
app.use(express.json())
app.use(middleware)

//GET
app.get('/',
    checkSchema(validationSchema),
    (req, res) => {
        res.send(dataset)
    })

//getting all users
app.get('/api/users',
    checkSchema(validationSchema),
    (req, res) => {
        res.send(dataset)
    })


//getting user per id
app.get('/api/users/:id',
    checkSchema(validationSchema),
    (req, res) => {
        const { findIndex } = req
        res.status(200).send(dataset[findIndex])
    })


//query parameters
app.get('/api/users',
    checkSchema(validationSchema),
    resolveUserByIndex,
    (req, res) => {
       const { query } = req
        return res.send(dataset[query])
    })


//POST
app.post('/api/users',
    checkSchema(validationSchema),
    (req, res) => {
        const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()})
            }
            const data = matchedData(req)
            const new_user = {id: dataset[dataset.length -1].id + 1 , ...data}
            dataset.push(new_user)

            return res.status(200).send(new_user)
    })


//PATCH
app.patch('/api/users/:id',
    checkSchema(validationSchema), (req, res) => {
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
        return res.sendStatus(200)
    })


//PUT
app.put('/api/users/:id',
    checkSchema(validationSchema),
    resolveUserByIndex,
    (req, res) => {
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
        res.sendStatus(200)
    })


//DELETE
app.delete('/api/users/:id',
    checkSchema(validationSchema),
    resolveUserByIndex,
    (req, res) => {
        const { findIndex } = req
        dataset.splice(findIndex, 1)
        res.sendStatus(200)
    })


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
