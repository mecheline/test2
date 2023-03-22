import connectDB from "@/lib/db";
import User from "@/models/user";

export default async function getSingleUser(req, res) {
  await connectDB();
  console.log("hiaaaa");
  if (req.method === "GET") {
    const { edit } = req.query;
    console.log(edit)

    try {
      const result = await User.findOne({ _id: edit });
      if (result) {
        console.log(result);
        return res.status(200).json(result);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}
