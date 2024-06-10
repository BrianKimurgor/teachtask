
export const resolveUserByIndex = (req, res, next) => {
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

export default resolveUserByIndex
