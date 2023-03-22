import NextCors from "nextjs-cors";

import connectDB from "@/lib/db";
import User from "@/models/user";

async function handler(req, res) {
  await connectDB();
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Rest of the API logic

  if (req.method === "GET") {
    try {
      const data = await User.find();

      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (req.method === "POST") {
    console.log(req.body);
    try {
      const insert = await User.insertMany(req.body);
      return res.status(200).json(insert);
    } catch (error) {
      console.log(error);
    }
  }

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

  if (req.method === "DELETE") {
    console.log(req.body);
    try {
      const data = await User.findByIdAndRemove(req.body);
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
}
