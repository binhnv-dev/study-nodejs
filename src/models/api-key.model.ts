import { model, Schema } from 'mongoose'

const DOCUMENT_NAME = 'Api-key'
const COLLECTION_NAME = 'Api-keys'

const apiKeySchema = new Schema(
    {
        key: {
            type: String,
            require: true,
            unique: true
        },
        status: {
            type: Boolean,
            default: true
        },
        permissions: {
            type: [String],
            require: true,
            enum: ['0000', '0001', '0002  ']
        }
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME
    }
)

export const APIKeyModel = model(DOCUMENT_NAME, apiKeySchema)
