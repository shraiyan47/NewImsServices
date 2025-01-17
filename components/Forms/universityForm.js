import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function UploadUniversity({ data = null, edit = false }) {
  const bufferToBase64 = (bufferData, contentType) => {
    return `data:${contentType};base64,${Buffer.from(bufferData).toString(
      "base64"
    )}`;
  };

  const [formData, setFormData] = useState({
    university_name: "",
    courses: [],
    university_details: "",
  });

  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [dynamicInputs, setDynamicInputs] = useState([
    { course_name: "", type: "", details: "" },
  ]);

  const router = useRouter();
  const id = edit ? data._id : null;

  // Initialize form data if in edit mode
  useEffect(() => {
    if (edit && data) {
      setFormData({
        university_name: data.university_name || "",
        courses: Array.isArray(data.courses)
          ? data.courses
          : JSON.parse(data.courses || "[]"),
        university_details: data.university_details || "",
      });

      setContent(data.university_details || "");
      setThumbnail(
        data.thumbnail
          ? bufferToBase64(data.thumbnail.data.data, data.thumbnail.contentType)
          : ""
      );
      setCoverPhoto(
        data.coverPhoto
          ? bufferToBase64(
              data.coverPhoto.data.data,
              data.coverPhoto.contentType
            )
          : ""
      );

      setDynamicInputs(
        Array.isArray(data.courses)
          ? data.courses
          : JSON.parse(data.courses || "[]")
      );
    }
  }, [edit, data]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "thumbnail") setThumbnail(files[0]);
    if (name === "coverPhoto") setCoverPhoto(files[0]);
  };

  const handleDynamicInputChange = (index, field, value) => {
    const updatedInputs = [...dynamicInputs];
    updatedInputs[index][field] = value;
    setDynamicInputs(updatedInputs);
    setFormData({ ...formData, courses: updatedInputs });
  };

  const addInputBatch = () => {
    setDynamicInputs([
      ...dynamicInputs,
      { course_name: "", type: "", details: "" },
    ]);
  };

  const removeInputBatch = (index) => {
    const updatedInputs = dynamicInputs.filter((_, i) => i !== index);
    setDynamicInputs(updatedInputs);
    setFormData({ ...formData, courses: updatedInputs });
  };

  const handleContentChange = (value) => {
    setContent(value);
    setFormData({ ...formData, university_details: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("university_name", formData.university_name);
    formDataToSubmit.append("courses", JSON.stringify(formData.courses));
    formDataToSubmit.append("university_details", formData.university_details);
    if (thumbnail) formDataToSubmit.append("thumbnail", thumbnail);
    if (coverPhoto) formDataToSubmit.append("coverPhoto", coverPhoto);

    const response = await fetch(
      edit ? `/api/admin/university/?id=${id}` : "/api/admin/university",
      {
        method: edit ? "PUT" : "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSubmit,
      }
    );

    const result = await response.json();
    console.log(result);
    router.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* University Name Input */}
      <div className="relative w-full mb-3">
        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
          University Name
        </label>
        <input
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          type="text"
          name="university_name"
          placeholder="University Name"
          value={formData.university_name}
          onChange={handleInputChange}
        />
      </div>

      {/* Dynamic Input for Courses */}
      <div className="relative w-full mb-3">
        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
          Courses
        </label>
        {dynamicInputs.map((input, index) => (
          <div key={index} className="mb-4 border p-4 rounded">
            <div className="flex gap-4 mb-2">
              <input
                type="text"
                placeholder="Course Name"
                value={input.course_name}
                onChange={(e) =>
                  handleDynamicInputChange(index, "course_name", e.target.value)
                }
                className="flex-1 p-2 border rounded"
              />
              <select
                value={input.type}
                onChange={(e) =>
                  handleDynamicInputChange(index, "type", e.target.value)
                }
                className="flex-1 p-2 border rounded"
              >
                <option value="">Select Type</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Post Graduate">Post Graduate</option>
              </select>
            </div>
            <textarea
              placeholder="Details"
              value={input.details}
              onChange={(e) =>
                handleDynamicInputChange(index, "details", e.target.value)
              }
              className="w-full p-2 border rounded"
            />
            <div className="mt-2 flex gap-4">
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeInputBatch(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  -
                </button>
              )}
              {index === dynamicInputs.length - 1 && (
                <button
                  type="button"
                  onClick={addInputBatch}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  +
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* University Details with Text Editor */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">University Details</h2>
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          name="university_details"
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image"],
            ],
          }}
          formats={[
            "header",
            "bold",
            "italic",
            "underline",
            "strike",
            "list",
            "bullet",
            "link",
            "image",
          ]}
          className="bg-white rounded-lg shadow-lg"
        />
        <div className="mt-4">
          <h3 className="font-semibold">Preview:</h3>
          <div
            className="p-4 border rounded bg-gray-100"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>

      {/* Thumbnail Upload */}
      <div className="relative w-full mb-3">
        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
          Thumbnail
        </label>
        <input type="file" name="thumbnail" onChange={handleFileChange} />
        {thumbnail && (
          <Image
            src={
              edit && typeof thumbnail === "string"
                ? thumbnail
                : URL.createObjectURL(thumbnail)
            }
            alt="thumbnail"
            width={100}
            height={100}
          />
        )}
      </div>

      {/* Cover Photo Upload */}
      <div className="relative w-full mb-3">
        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
          Cover Photo
        </label>
        <input type="file" name="coverPhoto" onChange={handleFileChange} />
        {coverPhoto && (
          <Image
            src={
              edit && typeof coverPhoto === "string"
                ? coverPhoto
                : URL.createObjectURL(coverPhoto)
            }
            alt="coverPhoto"
            width={100}
            height={100}
          />
        )}
      </div>

      {/* Submit Button */}
      <button
        className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="submit"
      >
        {edit ? "Update University" : "Create University"}
      </button>
    </form>
  );
}
