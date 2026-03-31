import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import './db/init.mongodb'

const app = express()

// 1. init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// 2. init db

// 3. init router
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Hello Nguyen Binh'
    })
})
export default app
