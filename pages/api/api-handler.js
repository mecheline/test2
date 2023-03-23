import connectDB from "@/lib/db";
import User from "@/models/user";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "GET") {
    try {
      const data = await User.find();

      return res.setHeader('Access-Control-Allow-Origin', '*').status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (req.method === "POST") {
    console.log(req.body);
    try {
      const insert = await User.insertMany(req.body);
      return res
        .setHeader("Access-Control-Allow-Origin", "*")
        .status(200)
        .json(insert);
    } catch (error) {
      console.log(error);
    }
  }

  if (req.method === "PUT") {
    console.log(req.body);
    const { id, name } = req.body;
    try {
      const record = await User.findByIdAndUpdate(id, { name }, { new: true });
      res
        .setHeader("Access-Control-Allow-Origin", "*")
        .status(200)
        .json(record);
    } catch (error) {
      console.log(error);
    }
  }

  if (req.method === "DELETE") {
    console.log(req.body);
    try {
      const data = await User.findByIdAndRemove(req.body);
      return res
        .setHeader("Access-Control-Allow-Origin", "*")
        .status(200)
        .json(data);
    } catch (error) {
      console.log(error);
    }
  }
}
