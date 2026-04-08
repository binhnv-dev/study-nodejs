import JWT from 'jsonwebtoken'
type ITokenHandlerInput = {
    payload: any
    privateKey: string
    publicKey: string
}
export const tokenHandler = async ({ payload, publicKey, privateKey }: ITokenHandlerInput) => {
    try {
        const accessToken = JWT.sign(payload, privateKey, {
            expiresIn: '2 days'
        })
        const refreshToken = JWT.sign(payload, privateKey, {
            expiresIn: '7 days'
        })

        JWT.verify(accessToken, publicKey, (err, decode) => {
            if (err) {
                console.error('error', err)
            } else {
                console.log('decode verify: ', decode)
            }
        })
        return { accessToken, refreshToken }
    } catch (error) {
        return error
    }
}
