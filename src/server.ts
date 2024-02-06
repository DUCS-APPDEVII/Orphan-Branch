import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import { router } from '../api/users'

// read the configuration from the environment variables
dotenv.config()

// setup the app - Note uses the configuration
const app: Express = express()
const PORT = process.env.PORT || 3000

// add the routes
app.use('/users/', router)

app.listen(PORT, () => {
    console.log(`The server is running on PORT: ${PORT}.`)
})
