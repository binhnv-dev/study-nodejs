import JWT from 'jsonwebtoken'
type ITokenHandlerInput = {
    payload: any
    privateKey: string
    publicKey: string
}
export const tokenHandler = async ({ payload, publicKey, privateKey }: ITokenHandlerInput) => {
    try {
        const accessToken = JWT.sign(payload, publicKey, {
            expiresIn: '2 days'
        })
        const refreshToken = JWT.sign(payload, publicKey, {
            expiresIn: '7 days'
        })

        const decode = JWT.verify(accessToken, publicKey)
        console.log('decode', decode)
        return { accessToken, refreshToken }
    } catch (error) {
        throw error
    }
}
