import connectDB from "@/lib/db";
import User from "@/models/user";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "GET") {
    try {
      const data = await User.find();
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
}
