import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

mongoose.connect(process.env.DB_URL || "")
const database = mongoose.connection

database.on('error', (error) => {
    console.log("Произошла ошибка: ", error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

export default database
