import mongoose from 'mongoose';

// Define the Feedback schema
const DestinationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  countryName: { type: String, required: true },
  destination: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  thumbnail: {
    data: Buffer, // Store image data as binary
    contentType: String, // Store the MIME type of the image
  },
  coverPhoto: {
    data: Buffer, // Store image data as binary
    contentType: String, // Store the MIME type of the image
  },
});

// Export the Destination model
export default mongoose.models.Destination || mongoose.model('Destination', DestinationSchema);
