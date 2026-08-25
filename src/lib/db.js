import mongoose from "mongoose";



const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.ConnectionString);
    console.log("db connected");
  } catch (error) {
    console.log("db error", error);
    throw error;
  }
};

export default dbConnect;