import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log(authHeader)

    if (!authHeader) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1]; // Extract the token
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: Token missing' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded payload to `req` for use in other middleware
    next(); // Call the next middleware/handler
  } catch (error) {
    console.error('Token verification failed:', error);
    return res.status(403).json({ message: 'Forbidden: Invalid token' });
  }
};
