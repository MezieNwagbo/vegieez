import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database Connected");
    });
    const response = await mongoose.connect(
      `${process.env.MONGODB_URI}/vegieez`
    );
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
