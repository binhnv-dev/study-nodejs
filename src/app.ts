import dotenv from 'dotenv' // import top -> important
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import rootRouter from './routes/index.ts'
// 2. init db
import './db/init.mongodb.ts'

dotenv.config()

const app = express()

// 1. init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 3. init router
app.use('/', rootRouter)
export default app
