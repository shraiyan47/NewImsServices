import mongoose from "mongoose";

// Define the Feedback schema
const UniversitiesSchema = new mongoose.Schema({
  university_name: { type: String, required: true },
  courses: { type: Object, required: true }, // [{"course_name":"SWE", "type":"Post Graduate", "details":"cost: 5000"}]
  university_details: { type: String, required: true },
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

// Export the Universities model
export default mongoose.models.Universities ||
  mongoose.model("Universities", UniversitiesSchema);
