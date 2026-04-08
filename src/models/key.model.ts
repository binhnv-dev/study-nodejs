import { Schema, model } from 'mongoose'

const DOCUMENT_NAME = 'Key'
const COLLECTION = 'Keys'
const keySchema = new Schema(
    {
        user: {
            type: Schema.ObjectId,
            require: true,
            ref: 'User'
        },
        privateKey: {
            type: String,
            require: true
        },
        publicKey: {
            type: String,
            require: true
        },
        refreshToken: {
            type: String,
            require: true
        }
    },
    { timestamps: true, collection: COLLECTION }
)

export const KeyModal = model(DOCUMENT_NAME, keySchema)
