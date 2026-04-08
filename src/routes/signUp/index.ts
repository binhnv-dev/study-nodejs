import express from 'express'
import { signUpController } from '../../controllers/access.controller.ts'

const signUpRouter = express.Router()

signUpRouter.post('/shop/signup', signUpController)

export default signUpRouter
