import Feedback from "../../../models/Feedback.js"; // Import the Feedback model

import { verifyToken } from "../verifytoken";

import { connectToDatabase } from "../connectDB";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Verify the admin token
    verifyToken(req, res, async () => {
      try {
        await connectToDatabase();
        const feedbacks = await Feedback.find().sort({ createdAt: -1 }); // Sort by newest first
        return res.status(200).json(feedbacks);
      } catch (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
    });
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
