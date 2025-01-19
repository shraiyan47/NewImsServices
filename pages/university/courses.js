import Image from "next/image";
import React from "react";

const Courses = ({ university }) => {
  const courses = JSON.parse(university.courses);

  // Convert cover photo from Buffer to Base64
  const coverPhoto =
    university.coverPhoto &&
    `data:${university.coverPhoto.contentType};base64,${btoa(
      String.fromCharCode(...university.coverPhoto.data.data)
    )}`;

  return (
    <div>
      {/* Courses Grid */}
      <div className="container mx-auto px-4   overflow-x-scroll" >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-20">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
            >
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  {course.course_name}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{course.details}</p>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  {course.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
