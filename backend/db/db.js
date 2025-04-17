import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const URI=process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
     
    }
};

export default connectDB;