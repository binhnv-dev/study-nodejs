const development = {
    app: {
        port: process.env.DEV_APP_PORT || 3000
    },
    database: {
        name: process.env.DEV_NAME || 'shopDev',
        host: process.env.DEV_HOST || 'localhost',
        port: process.env.DEV_PORT || 27017
    }
}

const production = {
    app: {
        port: process.env.PRO_APP_PORT || 3000
    },
    database: {
        name: process.env.PRO_NAME || 'shopPro',
        host: process.env.PRO_HOST || 'localhost',
        port: process.env.PRO_PORT || 27017
    }
}

const env: keyof typeof config = process.env.NODE_ENV ? 'production' : 'development'
const config = { development, production }

export default config[env]
