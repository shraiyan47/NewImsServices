import jwt from 'jsonwebtoken';
import Feedback from '../../../models/Feedback.js'; // Import the Feedback model
import mongoose from 'mongoose';

// Middleware to verify admin token
const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  const token = authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded; // Add admin info to the request
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

// Connect to MongoDB
const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
};

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Verify the admin token
    verifyToken(req, res, async () => {
      try {
        await connectToDatabase();
        const feedbacks = await Feedback.find().sort({ createdAt: -1 }); // Sort by newest first
        return res.status(200).json(feedbacks);
      } catch (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    });
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
