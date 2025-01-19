// import Modal from "components/Modal/Modal";
import React, { useState } from "react";
import Courses from "./courses";
import Image from "next/image";

const UniversityDetails = ({ university }) => {
  // const [modalContent, setModalContent] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const courses = JSON.parse(university.courses);

  // Convert cover photo from Buffer to Base64
  const coverPhoto =
    university.coverPhoto &&
    `data:${university.coverPhoto.contentType};base64,${btoa(
      String.fromCharCode(...university.coverPhoto.data.data)
    )}`;

  return (
    <div className="space-y-6 overflow-auto">
      {/* Header */}

      {/* University Cover Photo */}
      {coverPhoto && (
        <div className="mb-6">
          <Image
            src={coverPhoto}
            alt={`${university.university_name} Cover`}
            className="w-full  object-cover rounded-lg shadow-lg"
            style={{ height: "20rem" }}
            width={1}
            height={1}
          />
        </div>
      )}

      <div className="flex justify-center space-x-4 m-10 p-10">
        {/* <img
          src={`data:${university.thumbnail.contentType};base64,${btoa(
            String.fromCharCode(...university.thumbnail.data.data)
          )}`}
          alt={university.university_name}
          className="w-24 h-24 rounded-lg"
        /> */}
        <div>
          <h1 className="text-2xl font-bold">{university.university_name}</h1>
          <div
            className="text-gray-600 mt-2"
            dangerouslySetInnerHTML={{ __html: university.university_details }}
          />
        </div>
      </div>

      {/* Courses */}

      <Courses university={university} />

      {/* Modal */}
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Course Details </h2>
        <p className="text-gray-700 mb-6">
          <h1 className="text-xl font-bold">{modalContent?.course_name}</h1>
          <p>{modalContent?.details}</p>
        </p>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
      </Modal> */}
    </div>
  );
};

export default UniversityDetails;
