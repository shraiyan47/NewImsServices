import mongoose from 'mongoose';

// Define the Feedback schema
const DestinationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  countryName: { type: String, required: true },
  destination: { type: String, required: true },
  thumbnail: { type: String }, // Path to the thumbnail image
  coverPhoto: { type: String }, // Path to the cover photo
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

// Export the Destination model
export default mongoose.models.Destination || mongoose.model('Destination', DestinationSchema);
