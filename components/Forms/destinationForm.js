import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Import the Quill CSS for styling
// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function UploadDestination({ data = null, edit = false }) {


  const [formData, setFormData] = useState({
    title: (edit && data.title) || "",
    countryName: (edit && data.countryName) || "",
    destination: (edit && data.destination) || "",
  });

  const [content, setContent] = useState((edit && data.destination) || `
    <h1>This is a heading</h1>
    <p><strong>Bold text</strong> and <em>italic text</em>.</p>
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  `);

  const handleContentChange = (value) => {
    setContent(value);
    setFormData({
      ...formData,
      destination: value,
    });
  };


  const router = useRouter();
  const id = (edit && data._id) || null;

  const bufferToBase64 = (bufferData, contentType) => {
    return `data:${contentType};base64,${Buffer.from(bufferData).toString(
      "base64"
    )}`;
  };

  const [thumbnail, setThumbnail] = useState(
    (edit &&
      bufferToBase64(
        data?.thumbnail?.data?.data,
        data?.thumbnail?.contentType
      )) ||
      ""
  );
  const [coverPhoto, setCoverPhoto] = useState(
    (edit &&
      bufferToBase64(
        data?.coverPhoto?.data?.data,
        data?.coverPhoto?.contentType
      )) ||
      ""
  );

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    console.log(files, name);
    if (name === "thumbnail") setThumbnail(files[0]);
    if (name === "coverPhoto") setCoverPhoto(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // Replace with actual token

    console.log(formData, thumbnail, coverPhoto);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("countryName", formData.countryName);
    data.append("destination", formData.destination);
    if (thumbnail) data.append("thumbnail", thumbnail);
    if (coverPhoto) data.append("coverPhoto", coverPhoto);

    try {
      const response = await fetch(
        (edit && "/api/admin/destination/?id=" + id) || "/api/admin/destination",
        {
          method: (edit && "PUT") || "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: data,
        }
      );

      const result = await response.json();
      console.log(result);
      router.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Title
        </label>
        <input
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          type="text"
          name="title"
          placeholder="Title"
          value={formData?.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Country Name
        </label>
        <input
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          type="text"
          name="countryName"
          placeholder="Country Name"
          value={formData?.countryName}
          onChange={handleInputChange}
        />{" "}
      </div>
      {/* <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Destination
        </label>
        <input
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData?.destination}
          onChange={handleInputChange}
        />
      </div> */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Details about Destination</h2>
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          name="destination"
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
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Thumbnail
        </label>
        <input type="file" name="thumbnail" onChange={handleFileChange} />
        {thumbnail !== "" && (
          <Image
            src={edit ? thumbnail : URL.createObjectURL(thumbnail)}
            alt="thumbnail"
            width={100}
            height={100}
          />
        )}
      </div>
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Cover Photo
        </label>
        <input
          type="file"
          name="coverPhoto"
          onChange={handleFileChange}
          multiple
        />
        {coverPhoto !== "" && (
          <Image
            src={edit ? coverPhoto : URL.createObjectURL(coverPhoto)}
            alt="coverPhoto"
            width={100}
            height={100}
          />
        )}
      </div>
      <button
        className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="submit"
      >
        {(edit && "Update") || "Create"}
      </button>
    </form>
  );
}
