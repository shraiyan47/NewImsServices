import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
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