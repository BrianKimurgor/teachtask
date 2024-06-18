import express from 'express'
import router from '../routes/routes.mjs' // Ensure the correct path to your routes file
import loggingMiddleware from '../middlewares/loggingMiddleware.mjs'
import cookieParser from 'cookie-parser'
import cookieMiddleware from '../middlewares/cookieMiddleWare.mjs'
import bodyParser from 'body-parser'

const app = express()
// app.use(express.json());
app.use(bodyParser.json())
app.use(cookieParser('cookie_val'))
app.use('/api', loggingMiddleware, cookieMiddleware, router)
// app.use();

const PORT = process.env.PORT || 3700
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
