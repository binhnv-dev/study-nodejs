import express from 'express'
import signUpRouter from './signUp/index.ts'
import { checkAPIKey, checkPermission } from '../auth/auth-api-key.ts'

const rootRouter = express.Router()

// create middleware check api key & permission
rootRouter.use(checkAPIKey)
rootRouter.use(checkPermission('0000'))
rootRouter.use('/v1/api', signUpRouter)

export default rootRouter
