import express from "express"
import { loggingMiddleware } from "../middlewares/loggingMiddleware.mjs"
import router from "../routes/routes.mjs"





const app = express()
app.use(express.json())
app.use(router)
app.use(loggingMiddleware)




const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})
