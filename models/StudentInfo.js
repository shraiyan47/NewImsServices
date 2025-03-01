import mongoose from 'mongoose';

const StudentInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  education: {
    type: String,
    required: true,
    enum: ['hsc', 'diploma', 'bachelors', 'masters']
  },
  cgpa: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  ielts: {
    type: String,
    required: true,
    enum: ['yes', 'no', 'preparing']
  },
  ieltsScore: {
    type: Number,
    min: 0,
    max: 9
  },
  preferredCountry: {
    type: String,
    required: true
  },
  budget: {
    type: String,
    required: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'reviewed', 'contacted']
  }
});

export default mongoose.models.StudentInfo || mongoose.model('StudentInfo', StudentInfoSchema);
