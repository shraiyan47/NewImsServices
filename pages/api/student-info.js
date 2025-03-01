import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import xss from 'xss';
import StudentInfo from '../../models/StudentInfo';

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

// Rate limiter middleware
const limiter = rateLimit({
  windowMs: 30 * 1000, // 30 seconds
  max: 1, // limit each IP to 1 request per windowMs
  message: 'Too many requests, please try again later.'
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Generate random numbers for CAPTCHA
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return res.status(200).json({ num1, num2 });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Apply rate limiter
  await limiter(req, res, () => {});

  // Simple CAPTCHA check
  const { captcha, num1, num2, ...formData } = req.body;
  if (parseInt(captcha) !== num1 + num2) {
    return res.status(400).json({ success: false, message: 'Invalid CAPTCHA' });
  }

  // Sanitize input
  const sanitizedData = {
    name: xss(formData.name),
    email: xss(formData.email),
    phone: xss(formData.phone),
    education: xss(formData.education),
    cgpa: formData.cgpa,
    ielts: xss(formData.ielts),
    ieltsScore: formData.ieltsScore,
    preferredCountry: xss(formData.preferredCountry),
    budget: xss(formData.budget)
  };

  try {
    await connectToDatabase();

    const studentInfo = await StudentInfo.create(sanitizedData);
    res.status(201).json({ success: true, data: studentInfo });

  } catch (error) {
    console.error('Submission error:', error);
    res.status(400).json({ success: false, message: error.message });
  }
}
