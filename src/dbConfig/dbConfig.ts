import mongoose from "mongoose";

let isConnected = false;

export async function connectToDB(){
    if (isConnected) {
        console.log("MongoDB already connected");
        return;
    }
    
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        isConnected = true;
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("DB connection error", error);
        throw error;
    }
}