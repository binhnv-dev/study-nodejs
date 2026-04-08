import { ROLE, ROUND } from '../const/index.ts'
import { UserModel } from '../models/user.model.ts'
import bcrypt from 'bcrypt'
import { keyStoreService } from './key-token.service.ts'
import { tokenHandler } from '../auth/token.ts'
import { getFieldsData } from '../helps/index.ts'

const bytes = new Uint8Array(4)

type ISignUpServiceInput = {
    name: string
    email: string
    password: string
}
export const signUpService = async ({ name, email, password }: ISignUpServiceInput) => {
    try {
        //step1: check exist user
        const isExistUser = await UserModel.findOne({ email }).lean()
        if (isExistUser) {
            return {
                code: 'xxx',
                message: 'User already register!!!'
            }
        }

        // step2: create new user
        // hash password
        const passwordHashed = await bcrypt.hash(password, ROUND)

        const newUser = await UserModel.create({ name, email, password: passwordHashed, roles: [ROLE.USER] })

        // create successfully
        if (newUser) {
            //step3: create access token & refresh token

            // create privateKey & publicKey
            const publicKey = crypto.getRandomValues(bytes).toString()
            const privateKey = crypto.getRandomValues(bytes).toString()

            // save privateKey & publicKey corresponding user
            const keyStore = await keyStoreService({ userID: newUser._id, publicKey, privateKey })

            if (!keyStore) {
                return {
                    code: 'xxx',
                    message: 'key store error'
                }
            }

            // create token
            const tokens = await tokenHandler({ payload: { userID: newUser._id, email }, publicKey, privateKey })
            console.log('create token success', tokens)

            return {
                code: 201,
                metadata: {
                    user: getFieldsData(['_id', 'name', 'email'], newUser),
                    tokens
                }
            }
        }
    } catch (error: any) {
        return {
            code: 'xxxx',
            message: error.message,
            status: 'error'
        }
    }
}
