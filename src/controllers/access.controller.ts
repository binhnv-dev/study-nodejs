import { Request, Response, NextFunction } from 'express'
import { signUpService } from '../services/access.services.ts'

export const signUpController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(201).json(await signUpService(req.body))
    } catch (error) {
        next(error)
    }
}
