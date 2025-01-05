import mongoose from 'mongoose'

const connectDB = async (connectionString: string) => {
  try {
    await mongoose.connect(connectionString)
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to MongoDB', error)
    process.exit(1)
  }
}

export default connectDB
