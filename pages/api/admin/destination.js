import jwt from "jsonwebtoken";
import multer from "multer";
import Destination from "../../../models/Destination";
import mongoose from "mongoose";
import { promisify } from "util";
import { verifyToken } from "../verifytoken";
import { connectToDatabase } from "../connectDB";

// Multer setup for file uploads
const upload = multer({
  storage: multer.memoryStorage(), // Store files in memory
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
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
          thumbnail: req.files.thumbnail
            ? {
                data: req.files.thumbnail[0].buffer,
                contentType: req.files.thumbnail[0].mimetype,
              }
            : undefined,
          coverPhoto: req.files.coverPhoto
            ? {
                data: req.files.coverPhoto[0].buffer,
                contentType: req.files.coverPhoto[0].mimetype,
              }
            : undefined,
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
          const destinations = await Destination.find().sort({ createdAt: -1 });
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

        const { title, countryName, destination } = req.body;

        // Update the destination
        const updatedData = {
          title,
          countryName,
          destination,
        };

        if (req.files.thumbnail) {
          updatedData.thumbnail = {
            data: req.files.thumbnail[0].buffer,
            contentType: req.files.thumbnail[0].mimetype,
          };
        }

        if (req.files.coverPhoto) {
          updatedData.coverPhoto = {
            data: req.files.coverPhoto[0].buffer,
            contentType: req.files.coverPhoto[0].mimetype,
          };
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

        const deletedDestination = await Destination.findByIdAndDelete(id);
        if (!deletedDestination) {
          return res.status(404).json({ error: "Destination not found" });
        }

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
