import { Types } from 'mongoose'
import { KeyModal } from '../models/key.model.ts'

type IKeyServiceInput = {
    userID: Types.ObjectId
    publicKey: string
    privateKey: string
}
export const keyStoreService = async ({ userID, publicKey, privateKey }: IKeyServiceInput) => {
    try {
        const keySaved = await KeyModal.create({ user: userID, publicKey, privateKey })
        return keySaved ?? null
    } catch (error: any) {
        return error
    }
}
