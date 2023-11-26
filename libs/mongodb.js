import mongoose from "mongoose";


const connectMongoBD = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to database.');
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoBD