import app from './src/app'

const PORT = process.env.PORT
const server = app.listen(PORT, () => {
    console.log(`START with port :${PORT}`)
})

process.on('SIGINT', () => {
    server.close(() => console.log('Exit server express'))
})
