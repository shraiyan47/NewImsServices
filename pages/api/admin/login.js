import jwt from 'jsonwebtoken';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL; // Admin email from .env.local
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD; // Admin password from .env.local
const JWT_SECRET = process.env.JWT_SECRET; // Secret for signing JWTs

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check admin credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '8h' });
      return res.status(200).json({ message: 'Login successful', token });
    }

    return res.status(401).json({ error: 'Invalid email or password' });
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).json({ error: `Method ${req.method} not allowed` });
}
