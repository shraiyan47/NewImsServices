import jwt from "jsonwebtoken";
import multer from "multer";
import Destination from "../../../models/Destination";
import mongoose from "mongoose";
import { promisify } from "util";
import { verifyToken } from "../verifytoken";
import { connectToDatabase } from "../connectDB";
import path from "path";
import fs from "fs";

// Helper function to create URL-safe filenames
const createSafeFileName = (title, fieldname) => {
  const timestamp = Date.now();
  const safeTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return `${safeTitle}-${fieldname}-${timestamp}`;
};

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(process.cwd(), 'public', 'img', 'destinations');
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Access title from the parsed form fields
    let formTitle = 'untitled';
    if (req.body && req.body.title) {
      formTitle = req.body.title;
    } else {
      // If req.body is not available yet, buffer the form data
      let bodyData = '';
      req.on('data', chunk => {
        bodyData += chunk.toString();
      });
      req.on('end', () => {
        try {
          const formData = new URLSearchParams(bodyData);
          if (formData.get('title')) {
            formTitle = formData.get('title');
          }
        } catch (error) {
          console.error('Error parsing form data:', error);
        }
      });
    }
    const safeFileName = createSafeFileName(formTitle, file.fieldname);
    cb(null, `${safeFileName}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// Promisify the multer middleware for use in async functions
const uploadMiddleware = promisify(
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "coverPhoto", maxCount: 1 },
  ])
);

export default async function handler(req, res) {
  await connectToDatabase();
 
  console.log("req.method", req.method);
  
  try {
    switch (req.method) {
      case "POST": {
        // Verify token
         // Token verification middleware
        await new Promise((resolve, reject) => {
          verifyToken(req, res, (err) => (err ? reject(err) : resolve()));
        });

        // Parse file uploads
        await uploadMiddleware(req, res);

        const { title, countryName, destination } = req.body;

        // Create and save the new destination
        const newDestination = new Destination({
          title,
          countryName,
          destination,
          thumbnail: req.files.thumbnail ? `/img/destinations/${req.files.thumbnail[0].filename}` : undefined,
          coverPhoto: req.files.coverPhoto ? `/img/destinations/${req.files.coverPhoto[0].filename}` : undefined,
        });

        await newDestination.save();
        return res
          .status(201)
          .json({ message: "Destination created successfully!" });
      }

      case "GET": {
        const { id } = req.query;
        if (id) {
          // Get a specific destination
          const destination = await Destination.findById(id);
          if (!destination) {
            return res.status(404).json({ error: "Destination not found" });
          }
          return res.status(200).json(destination);
        } else {
          // Get all destinations
          const destinations = await Destination.find().select("thumbnail title countryName").sort({ createdAt: -1 });
          return res.status(200).json(destinations);
        }
      }

      case "PUT": {
        // Verify token
         // Token verification middleware
        await new Promise((resolve, reject) => {
          verifyToken(req, res, (err) => (err ? reject(err) : resolve()));
        });

        const { id } = req.query;
        if (!id) {
          return res.status(400).json({ error: "Destination ID is required" });
        }

        // Parse file uploads
        await uploadMiddleware(req, res);

        const { title, countryName, destination, isActive } = req.body;

        const oldDestination = await Destination.findById(id);
        if (!oldDestination) {
          return res.status(404).json({ error: "Destination not found" });
        }

        // Update the destination
        const updatedData = {
          title,
          countryName,
          destination,
          isActive,
        };

        // Delete old files if new ones are uploaded
        if (req.files.thumbnail) {
          if (oldDestination.thumbnail) {
            const oldPath = path.join(process.cwd(), 'public', oldDestination.thumbnail);
            if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
          }
          updatedData.thumbnail = `/img/destinations/${req.files.thumbnail[0].filename}`;
        }

        if (req.files.coverPhoto) {
          if (oldDestination.coverPhoto) {
            const oldPath = path.join(process.cwd(), 'public', oldDestination.coverPhoto);
            if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
          }
          updatedData.coverPhoto = `/img/destinations/${req.files.coverPhoto[0].filename}`;
        }

        const updatedDestination = await Destination.findByIdAndUpdate(
          id,
          updatedData,
          {
            new: true,
          }
        );

        if (!updatedDestination) {
          return res.status(404).json({ error: "Destination not found" });
        }

        return res
          .status(200)
          .json({
            message: "Destination updated successfully",
            updatedDestination,
          });
      }

      case "DELETE": {
        // Verify token
         // Token verification middleware
        await new Promise((resolve, reject) => {
          verifyToken(req, res, (err) => (err ? reject(err) : resolve()));
        });

        const { id } = req.query;
        if (!id) {
          return res.status(400).json({ error: "Destination ID is required" });
        }

        const destination = await Destination.findById(id);
        
        if (!destination) {
          return res.status(404).json({ error: "Destination not found" });
        }

        // Delete associated files
        if (destination.thumbnail) {
          const thumbnailPath = path.join(process.cwd(), 'public', destination.thumbnail);
          if (fs.existsSync(thumbnailPath)) fs.unlinkSync(thumbnailPath);
        }
        if (destination.coverPhoto) {
          const coverPhotoPath = path.join(process.cwd(), 'public', destination.coverPhoto);
          if (fs.existsSync(coverPhotoPath)) fs.unlinkSync(coverPhotoPath);
        }

        await Destination.findByIdAndDelete(id);
        return res
          .status(200)
          .json({ message: "Destination deleted successfully" });
      }

      default:
        return res
          .status(405)
          .json({ error: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error("Error:", error.message);
    return res
      .status(500)
      .json({ error: error.message || "Internal server error" });
  }
}

// Disable bodyParser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};
