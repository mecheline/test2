import connectDB from "@/lib/db";
import User from "@/models/user";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    console.log(req.body);
    try {
      const insert = await User.insertMany(req.body);
      return res.status(200).json(insert);
    } catch (error) {
      console.log(error);
    }
  }
}
