import mongoose from 'mongoose';
import Feedback from '../../models/Feedback.js'; 

// Connect to MongoDB
const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  }
};

// // Define a feedback schema
// const FeedbackSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   feedback: String,
//   createdAt: { type: Date, default: Date.now },
// });

// const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, feedback } = req.body;

    if (!name || !email || !feedback) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    try {
      await connectToDatabase();
      const newFeedback = new Feedback({ name, email, feedback });
      await newFeedback.save();

      return res.status(200).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
