import dotenv from 'dotenv' // import top -> important
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'

dotenv.config()

const app = express()

// 1. init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// 2. init db
import './db/init.mongodb'

// 3. init router
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Hello world!!!'
    })
})
export default app
