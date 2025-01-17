import multer from "multer";
import Universities from "../../../models/University";
// import mongoose from 'mongoose';
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

export default async function university(req, res) {
  await connectToDatabase();
  console.log("method:", req.method);
  try {
    switch (req.method) {
      case "POST": {
        try {
          // Token verification middleware
          await new Promise((resolve, reject) => {
            verifyToken(req, res, (err) => (err ? reject(err) : resolve()));
          });

          // Parse file uploads
          await uploadMiddleware(req, res);

          const { university_name, courses, university_details } = req.body;

          // Validate required fields
          if (!university_name || !courses || !university_details) {
            return res
              .status(400)
              .json({ message: "Missing required fields." });
          }

          // Extract files if available
          const thumbnail = req.files?.thumbnail?.[0];
          const coverPhoto = req.files?.coverPhoto?.[0];

          // Create and save the new University
          const newUniversity = new Universities({
            university_name,
            courses,
            university_details,
            thumbnail: thumbnail
              ? {
                  data: thumbnail.buffer,
                  contentType: thumbnail.mimetype,
                }
              : undefined,
            coverPhoto: coverPhoto
              ? {
                  data: coverPhoto.buffer,
                  contentType: coverPhoto.mimetype,
                }
              : undefined,
          });

          await newUniversity.save();
          return res
            .status(201)
            .json({ message: "University created successfully!" });
        } catch (error) {
          console.error("Error creating university:", error);
          return res
            .status(500)
            .json({ message: "Error creating university." });
        }
      }

      case "GET": {
        const { id } = req.query;
        if (id) {
          // Get a specific University
          const University = await Universities.findById(id);
          if (!University) {
            return res.status(404).json({ error: "University not found" });
          }
          return res.status(200).json(University);
        } else {
          // Get all Universitys
          const Universitys = await Universities.find().sort({
            createdAt: -1,
          });
          return res.status(200).json(Universitys);
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
          return res.status(400).json({ error: "University ID is required" });
        }

        // Parse file uploads
        await uploadMiddleware(req, res);

        const { university_name, courses, university_details } = req.body;

        // Update the University
        const updatedData = {
          university_name,
          courses,
          university_details,
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

        const updatedUniversity = await Universities.findByIdAndUpdate(
          id,
          updatedData,
          {
            new: true,
          }
        );

        if (!updatedUniversity) {
          return res.status(404).json({ error: "University not found" });
        }

        return res.status(200).json({
          message: "University updated successfully",
          updatedUniversity,
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
          return res.status(400).json({ error: "University ID is required" });
        }

        const deletedUniversity = await Universities.findByIdAndDelete(id);
        if (!deletedUniversity) {
          return res.status(404).json({ error: "University not found" });
        }

        return res
          .status(200)
          .json({ message: "University deleted successfully" });
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
