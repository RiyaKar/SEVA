import mongoose from "mongoose";

const connectDB = async() => {
    try {
        if (!process.env.MONGODB_URI) {
            console.error("MONGODB_URI missing");
        }
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;