import { NextFunction, Request, Response } from 'express'
import { findAPIKeyID } from '../services/api-key.service.ts'

export const checkAPIKey = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const apiKey = req.headers['x-api-key']?.toString()
        if (!apiKey) {
            return res.status(403).json({
                message: 'Forbidden'
            })
        }

        // check api key exist in DB?
        const apiKeyObjDB = await findAPIKeyID(apiKey)
        if (!apiKeyObjDB) {
            return res.status(403).json({
                message: 'Forbidden'
            })
        }

        // attach apiKeyObjDB for next middleware
        req.apiKeyObjDB = apiKeyObjDB
        return next()
    } catch (error) {
        next(error)
    }
}
export const checkPermission = (permission: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.apiKeyObjDB) {
            return res.status(403).json({
                message: 'Forbidden'
            })
        }
        if (!req.apiKeyObjDB.permissions) {
            return res.status(403).json({
                message: 'Permission denied'
            })
        }

        const isValidPermission = req.apiKeyObjDB.permissions.includes(permission)
        if (!isValidPermission) {
            return res.status(403).json({
                message: 'Permission denied'
            })
        }

        return next()
    }
}
