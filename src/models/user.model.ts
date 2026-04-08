import { Schema, model } from 'mongoose'

const DOCUMENT_NAME = 'User'
const COLLECTION_NAME = 'Users'

// Declare the Schema of the Mongo model
const userSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            maxLength: 150
        },
        email: {
            type: String,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'inactive'
        },
        verify: {
            type: Schema.Types.Boolean,
            default: false
        },
        roles: {
            type: Array,
            default: []
        }
    },
    { timestamps: true, collection: COLLECTION_NAME }
)

//Export the model
export const UserModel = model(DOCUMENT_NAME, userSchema)
