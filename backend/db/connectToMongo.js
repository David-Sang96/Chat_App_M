import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error.message);
    process.exit(1);
  }
};

export default connectToMongo;
