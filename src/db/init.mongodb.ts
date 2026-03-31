import mongoose from 'mongoose'
const connectString = 'mongodb://localhost:27017/shop'

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
            .catch((err) => console.log('Error Connect!'))
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
