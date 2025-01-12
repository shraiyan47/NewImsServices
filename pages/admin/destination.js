import DestinationTable from "components/Cards/DestinationTable";
import UploadDestination from "components/Forms/destinationForm";
import Admin from "layouts/Admin.js";
import React, { useState } from "react";

export default function Destination() {
  const [addFunctionality, setAddFunctionality] = useState(false);
  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <button
          className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          onClick={() => setAddFunctionality(addFunctionality ? false : true)}
        >
          Add Destination
        </button>
        {addFunctionality && (
          <>
            <UploadDestination />
            <button
              className="mt-6 bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              onClick={() => setAddFunctionality(false)}
            >
              Close
            </button>
          </>
        )}
      </div>

      <div className="w-full mb-12 px-4">
        <DestinationTable />
      </div>
    </div>
  );
}
Destination.layout = Admin;
