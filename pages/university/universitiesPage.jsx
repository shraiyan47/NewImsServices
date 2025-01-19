import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import UniversityDetails from "./UniversityDetails";
import Navbar from "components/Navbars/AuthNavbar";

const UniversitiesPage = ({ universities }) => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [destination, setDestination] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiaWF0IjoxNzM2Nzg2ODAwLCJleHAiOjE3MzY4MTU2MDB9.MeYxJl79exOOvhakMStqRutlkqaawPm6iXgRhD-LbPk"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      fetch("/api/admin/university", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // console.log(result)
          setDestination(result);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    // fetch("/api/admin/destination", requestOptions)
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div
          className="flex flex-col lg:flex-row bg-gray-50 h-full"
          style={{ marginTop: "10%" }}
        >
          {/* Sidebar */}
          <Sidebar
            universities={destination}
            onSelectUniversity={setSelectedUniversity}
            className="lg:w-64 lg:flex-none flex-shrink-0"
          />

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-x-auto">
            {selectedUniversity ? (
              <UniversityDetails university={selectedUniversity} />
            ) : (
              <p className="text-gray-500 text-center">
                Select a university to view details.
              </p>
            )}
          </main>
        </div>
      </main>
    </>
  );
};

export default UniversitiesPage;
