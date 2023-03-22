import connectDB from "@/lib/db";
import User from "@/models/user";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "PUT") {
    console.log(req.body);
    const { id, name } = req.body;
    try {
      const record = await User.findByIdAndUpdate(id, { name }, { new: true });
      res.status(200).json(record);
    } catch (error) {
      console.log(error);
    }
  }
}
