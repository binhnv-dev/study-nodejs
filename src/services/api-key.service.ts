import { APIKeyModel } from '../models/api-key.model.ts'

export const findAPIKeyID = async (apiKey?: string) => {
    await APIKeyModel.create({ key: crypto.getRandomValues(new Uint8Array(4)).toString(), permissions: ['0000'] })
    const apiKeyObj = await APIKeyModel.findOne({ key: apiKey }).lean()
    return apiKeyObj
}
