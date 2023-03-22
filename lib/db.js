import mongoose from "mongoose";

const connectDB = async () => {
  // if (mongoose.connection[0]) {
  //   return;
  // }

  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(console.log("Connected to database"))
    .catch("Error connecting to database");
};

export default connectDB;
