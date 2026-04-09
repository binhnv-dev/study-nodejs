import { Types } from 'mongoose'
import { KeyModel } from '../models/key.model.ts'

type IKeyServiceInput = {
    userID: Types.ObjectId
    publicKey: string
    privateKey: string
}
export const saveKeyStoreService = async ({ userID, publicKey, privateKey }: IKeyServiceInput) => {
    try {
        const keySaved = await KeyModel.create({ user: userID, publicKey, privateKey })
        return keySaved ?? null
    } catch (error: any) {
        return error
    }
}
