import 'express'

declare global {
    namespace Express {
        interface Request {
            apiKeyObjDB?: {
                key?: string | null
                status: boolean
                permissions: string[]
            }
        }
    }
}
