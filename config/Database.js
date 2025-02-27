import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully ")
    }
    catch (error) {
        console.log("Connection failed");
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDB;