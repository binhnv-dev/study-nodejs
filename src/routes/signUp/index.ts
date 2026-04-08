import express from 'express'
import { signUpController } from '../../controllers/access.controller.ts'

const signUpRouter = express.Router()

signUpRouter.post('/user/signup', signUpController)

export default signUpRouter
