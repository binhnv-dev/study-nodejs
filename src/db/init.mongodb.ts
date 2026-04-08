import mongoose from 'mongoose'
import configMongodb from '../config/config.mongodb.ts'
const {
    database: { host, name, port }
} = configMongodb
const connectString = `mongodb://${host}:${port}/${name}`

class Database {
    private static instance: Database | null = null
    constructor() {
        this.connect()
    }

    connect() {
        mongoose.set('debug', { color: true })

        mongoose
            .connect(connectString)
            .then(() => console.log('Connected MongoDB Success'))
            .catch((err) => console.log('Error Connect!', err))
    }
    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongoDb = Database.getInstance()
export default instanceMongoDb
