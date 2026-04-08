import express from 'express'
import signUpRouter from './signUp/index.ts'

const rootRouter = express.Router()

rootRouter.use('/v1/api', signUpRouter)

export default rootRouter
