import { useState } from "react";

export default function UploadDestination() {
  const [formData, setFormData] = useState({
    title: "",
    countryName: "",
    destination: "",
  });
  const [thumbnail, setThumbnail] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token =  localStorage.getItem("token"); // Replace with actual token

    const data = new FormData();
    data.append("title", formData.title);
    data.append("countryName", formData.countryName);
    data.append("destination", formData.destination);
    if (thumbnail) data.append("thumbnail", thumbnail);
    if (coverPhoto) data.append("coverPhoto", coverPhoto);

    const response = await fetch("/api/admin/destination", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    const result = await response.json();
    console.log(result);
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
          value={formData.title}
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
          value={formData.countryName}
          onChange={handleInputChange}
        />{" "}
      </div>
      <div className="relative w-full mb-3">
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
          value={formData.destination}
          onChange={handleInputChange}
        />
      </div>
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Thumbnail
        </label>
        <input type="file" name="thumbnail" onChange={handleFileChange} />
      </div>
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Cover Photo
        </label>
        <input type="file" name="coverPhoto" onChange={handleFileChange} />
      </div>
      <button
        className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="submit"
      >
        Create
      </button>
    </form>
  );
}
