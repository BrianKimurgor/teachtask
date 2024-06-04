import express from "express"
import {readFile} from "node:fs/promises"
import { fileURLToPath } from "node:url"
import path from "node:path"
import { isUtf8 } from "node:buffer"


const __dirname = path.dirname(fileURLToPath(import.meta.url))


const data = await readFile(path.join(__dirname, "eventsData.json"), "utf-8")
const dataset = JSON.parse(data)

//console.log(data)


const app = express()
app.use(express.json())

//GET
app.get('/', (req, res) =>{
    res.send(dataset)
})

//getting all users
app.get('/api/users', (req, res) => {
    res.send(dataset)
})


//getting user per id
app.get('/api/users/:id', (req,res) =>{
    const parseId = parseInt(req.params.id)//converting a string to an integer

    if(isNaN(parseId))
        return res.status(400).send({message: "this is an invalid ID"})

    const findUser = dataset.find((user) => user.id === parseId)//finding user that matches tha parseID

    if(!findUser)
        res.sendStatus(400)

    res.send(findUser)
})


//query parameters
app.get('/api/users', (req, res) =>{
    //filtering data by username and value
    const {query: {filter, value}} = req

    if(filter && value)
        return res.send(dataset.filter(user => user[filter].includes(value)))

    return res.send(dataset)
})


//POST
app.post('/api/users', (req,res) =>{
    const {body} = req
    const newUser = {id: dataset[dataset.length - 1].id + 1, ...body }
    dataset.push(newUser)

    return res.status(201).send(newUser)
})


//PATCH
app.patch('/api/users/:id', (req, res) =>{
    const {body, params: {id}} = req

    const parseId = parseInt(id)
    if(isNaN(parseId))
        return res.sendStatus(400)

    const findIndex = dataset.findIndex((user) =>{
        return user.id === parseId
    })

    if(findIndex === -1)
        return res.sendStatus(404)

    dataset[findIndex] = { ...dataset[findIndex], ...body}
    console.log('user updated')
    return res.sendStatus(200)
})


//PUT
app.put('/api/users/:id', (req, res) =>{
    const {body, params: {id}} = req

    const parseId = parseInt(id)
    if(isNaN(parseId))
        return res.sendStatus(400)

    const findIndex = dataset.findIndex((user) => {
        return user.id === parseId
    })

    if(findIndex === -1)
        return res.sendStatus(404)

    dataset[findIndex] = {id: parseId, ...body }
    res.sendStatus(200)
})


//DELETE
app.delete('/api/users/:id', (req, res) => {
    //from the request object destructure the object body and params
    const { params: {id}}  = req

    const parseId = parseInt(id)
    if(isNaN(parseId))
        return res.sendStatus(400)

    const findIndex = dataset.findIndex((user) => {
        return user.id === parseId
    })

    if(findIndex === -1)
        return res.sendStatus(404)

    dataset.splice(findIndex, 1)
    res.sendStatus(200)
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})
