import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PageChange from "components/PageChange/PageChange";

export default function DestinationTable({ color }) {
  const [dataDescription, setDataDescription] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("/api/admin/destination", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setDataDescription(result);
        console.log(result);
        setLoading(false)
      })
      .catch((error) => console.error(error));
  }, []);

  const [preview, setPreview] = useState(null);

  // Function to convert buffer data to base64
  const bufferToBase64 = (bufferData, contentType) => {
    return `data:${contentType};base64,${Buffer.from(bufferData).toString(
      "base64"
    )}`;
  };

  return (
    <>
    {loading && <PageChange path={'Destination'} />}
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Destination
              </h3>
            </div>
          </div>
        </div>
        {/* Image Preview */}
        <div className="block w-full overflow-x-auto">
          {preview && (
            <div
              style={{
                position: "fixed",
                top: "60%",
                left: "80%",
                transform: "translate(-50%, -50%)",
                zIndex: 100,
                padding: "10px",
                background: "white",
                border: "1px solid #ccc",
              }}
            >
              <img
                src={preview}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          )}

          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Title
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Country
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Thumbnail
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Cover Photo
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {dataDescription.map((x, i) => (
                <tr key={i} style={{backgroundColor: (i%2===0)?'#9696965c':'#e1e1e15c'}}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <span
                      className={
                        "ml-3 font-bold " +
                        +(color === "light"
                          ? "text-blueGray-600"
                          : "text-white")
                      }
                    >
                      {x.title}{i}
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {x.countryName}
                  </td>

                  <td
                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "center",
                    }}
                    onMouseEnter={() =>
                      setPreview(
                        bufferToBase64(
                          x.thumbnail.data.data,
                          x.thumbnail.contentType
                        )
                      )
                    }
                    onMouseLeave={() => setPreview(null)}
                  >
                    <img
                      src={bufferToBase64(
                        x.thumbnail.data.data,
                        x.thumbnail.contentType
                      )}
                      alt="Thumbnail"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td
                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "center",
                    }}
                    onMouseEnter={() =>
                      setPreview(
                        bufferToBase64(
                          x.coverPhoto.data.data,
                          x.coverPhoto.contentType
                        )
                      )
                    }
                    onMouseLeave={() => setPreview(null)}
                  >
                    <img
                      src={bufferToBase64(
                        x.coverPhoto.data.data,
                        x.coverPhoto.contentType
                      )}
                      alt="Cover Photo"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </td>

                  <td
                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    style={{
                      maxWidth: "300px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    title={x.destination}
                  >
                    {x.destination}
                  </td>

                  {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    <TableDropdown />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

DestinationTable.defaultProps = {
  color: "light",
};

DestinationTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
