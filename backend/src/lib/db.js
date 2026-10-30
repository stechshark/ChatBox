import mongoose from 'mongoose'

export async function connectDB() {
    try {
        const mongoUri = process.env.MONGODB_URI

        if(!mongoUri){
            throw new Error("MONGO URI is required")
        }

        const conn = await mongoose.connect(mongoUri)
        console.log("MongoDB Connected", conn.connection.host)
    } catch (error) {
        console.error("MongoDB Connection Error", error.message)
        process.exit(1)    // 1 means fail , 0 means success
    }
}