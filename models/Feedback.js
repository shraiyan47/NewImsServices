import mongoose from 'mongoose';

// Define the Feedback schema
const FeedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  feedback: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Export the Feedback model
export default mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema);
